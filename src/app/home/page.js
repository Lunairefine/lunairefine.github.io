import Header from '../components/header.js';
import Footer from '../components/footer.js';
import './page.css';
import Landing from './components/landing.js'


export default function Page() {
    return(
        <div class="container">
            <Header/>
            <Landing/>
            <Footer/>
        </div>
    );
}