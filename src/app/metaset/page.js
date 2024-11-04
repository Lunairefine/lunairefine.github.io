'use client'

import { useState, useEffect } from 'react'

export default function Page() {
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [attributes, setAttributes] = useState([{ trait_type: '', value: '' }])
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (imageUrl) {
      const img = new Image()
      img.onload = () => setImageError(false)
      img.onerror = () => setImageError(true)
      img.src = imageUrl
    }
  }, [imageUrl])

  const addAttribute = () => {
    setAttributes([...attributes, { trait_type: '', value: '' }])
  }

  const removeAttribute = (index) => {
    setAttributes(attributes.filter((_, i) => i !== index))
  }

  const updateAttribute = (index, field, value) => {
    const newAttributes = [...attributes]
    newAttributes[index][field] = value
    setAttributes(newAttributes)
  }

  const handleCreate = () => {
    if (!name || !imageUrl) return

    const metadata = {
      name,
      image: imageUrl,
    }

    if (description) {
      metadata.description = description
    }

    const validAttributes = attributes.filter(attr => attr.trait_type && attr.value)
    if (validAttributes.length > 0) {
      metadata.attributes = validAttributes
    }

    const blob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${name}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Metadata Generator</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full aspect-square bg-[#383838] rounded-lg overflow-hidden flex items-center justify-center">
          {imageUrl && !imageError ? (
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-gray-400">Image Preview</div>
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="block">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="URL Image"
              className="w-full bg-[#383838] text-white p-2 rounded-lg border-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter NFT Name"
              className="w-full bg-[#383838] text-white p-2 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block">Description (Optional):</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder=""
              className="w-full bg-[#383838] text-white p-2 rounded-lg"
              rows="3"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Attributes:</span>
              <div className="space-x-2">
                <button 
                  onClick={addAttribute}
                  className="px-2 py-1 text-green-400 hover:text-green-300"
                >
                  Add
                </button>
                <button 
                  onClick={() => removeAttribute(attributes.length - 1)}
                  className="px-2 py-1 text-red-400 hover:text-red-300"
                  disabled={attributes.length <= 1}
                >
                  Remove
                </button>
              </div>
            </div>

            {attributes.map((attr, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={attr.trait_type}
                  onChange={(e) => updateAttribute(index, 'trait_type', e.target.value)}
                  placeholder="Trait Type"
                  className="flex-1 bg-[#383838] text-white p-2 rounded-lg"
                />
                <input
                  type="text"
                  value={attr.value}
                  onChange={(e) => updateAttribute(index, 'value', e.target.value)}
                  placeholder="Value"
                  className="flex-1 bg-[#383838] text-white p-2 rounded-lg"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={handleCreate}
            className="w-full bg-[#00EC97] hover:bg-[#00D485] text-black font-semibold p-2 rounded-lg transition-colors"
            disabled={!name || !imageUrl || imageError}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}