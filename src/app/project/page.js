import './style.css';
import Header from "../components/header.js";
import Content1 from './components/project1.js';
import Content2 from './components/project2.js';
import Footer from '../components/footer.js'

export default function Page() { 
    return (
        <div class="Container">
            <Header/>
            <Content1/>
            <Content2/>
            <Footer/>
        </div>
    )
};