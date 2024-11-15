'use client'

import { useState, useEffect } from 'react'

export default function JsonGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    email: '',
    sosmed: {
      telegram: { value: '', verify: '' },
      twitter: { value: '', verify: '' },
      discord: { value: '', verify: '' },
      github: { value: '', verify: '' },
    },
    wallet: {
      evm: { value: '', verify: '' },
      solana: { value: '', verify: '' },
      keplr: { value: '', verify: '' },
      aptos: { value: '', verify: '' },
      near: { value: '', verify: '' },
    },
  })

  const [generatedJson, setGeneratedJson] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  useEffect(() => {
    document.title = 'JSON Generator'
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleNestedInputChange = (section, field, subfield) => (e) => {
    const { value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: {
          ...prevData[section][field],
          [subfield]: value,
        },
      },
    }))
  }

  const generateJson = () => {
    const jsonOutput = {
      name: formData.name,
      image: formData.image,
      email: formData.email,
      sosmed: Object.entries(formData.sosmed).map(([key, value]) => ({
        [key]: value.value,
        verify: value.verify,
      })),
      wallet: Object.entries(formData.wallet).map(([key, value]) => ({
        [key]: value.value,
        verify: value.verify,
      })),
    }
    const jsonString = JSON.stringify(jsonOutput, null, 2)
    setGeneratedJson(jsonString)

    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    setDownloadUrl(url)
  }

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `${formData.name || 'generated'}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const renderInputPair = (section, field, label) => (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label htmlFor={`${section}-${field}`} className="block text-sm font-medium text-white ">{label}</label>
        <input
          id={`${section}-${field}`}
          className="mt-1 block w-full rounded-md shadow-sm text-white p-2"
          value={formData[section][field].value}
          onChange={handleNestedInputChange(section, field, 'value')}
        />
      </div>
      <div>
        <label htmlFor={`${section}-${field}-verify`} className="block text-sm font-medium text-white">Verify</label>
        <input
          id={`${section}-${field}-verify`}
          className="mt-1 block w-full rounded-md shadow-sm text-white p-2"
          value={formData[section][field].verify}
          onChange={handleNestedInputChange(section, field, 'verify')}
        />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black p-8">
       <h1 className="text-2xl font-bold mb-6 text-white">Generate Your JSON</h1>
      <div className="max-w-2xl mx-auto bg-[#0d0d0d] p-6 rounded-lg border border-gray-300">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input id="name" name="name" className="text-black mt-1 p-2 block w-full rounded-md shadow-sm" value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-white">Image URL</label>
            <input id="image" name="image" className="text-black mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" value={formData.image} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm  font-medium text-white">Email</label>
            <input id="email" name="email" type="email" className="text-black mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm " value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Sosmed</h2>
            {renderInputPair('sosmed', 'telegram', 'Telegram')}
            {renderInputPair('sosmed', 'twitter', 'Twitter')}
            {renderInputPair('sosmed', 'discord', 'Discord')}
            {renderInputPair('sosmed', 'github', 'GitHub')}
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Wallet</h2>
            {renderInputPair('wallet', 'evm', 'EVM')}
            {renderInputPair('wallet', 'solana', 'Solana')}
            {renderInputPair('wallet', 'keplr', 'Keplr')}
            {renderInputPair('wallet', 'aptos', 'Aptos')}
            {renderInputPair('wallet', 'near', 'Near')}
          </div>
          <div className="flex space-x-4">
            <button type="button" className="px-4 py-2 bg-black text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={generateJson}>Generate JSON</button>
            <button type="button" className="px-4 py-2 bg-[#0ccc86] text-white rounded hover:bg-[#128259] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={handleDownload} disabled={!downloadUrl}>Download JSON</button>
          </div>
        </form>
        {generatedJson && (
          <div className="mt-6">
            <label htmlFor="generated-json" className="block text-sm font-medium text-white">Generated JSON</label>
            <textarea
              id="generated-json"
              value={generatedJson}
              readOnly
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-64 font-mono text-sm text-black"
            />
          </div>
        )}
      </div>
    </div>
  )
}