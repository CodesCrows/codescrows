import React, { useEffect } from 'react'
import './home.css'
import Logo from './../../svg/logo.svg'
import LogoTwo from './../../svg/logotwo.svg'
import Progress from './../../svg/progress.svg'
import ImagenOne from './../../svg/imageone.svg'
import Imagetwo from './../../svg/imagetwo.svg'
import Imagethree from './../../svg/imagetreen.svg'
function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementsByClassName('bkg-nav')[0];
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <nav>
        <div className='bkg-nav'>
          <div>
            <img className='logo' src={Logo} alt="" width={50} />
          </div>
          { /* /*/}
          <ul className='list-style'>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Benefícios</li>
            <li>Quem somos?</li>
          </ul>
          <a className='button-style' href="https://wa.me/553196864672?text=Olá,%20gostaria%20de%20mais%20informações">Orçamento</a>
        </div>
      </nav>
      { /* Portifólio /*/}
      <div className='Container-text'>
        <div className='text-h1'>
          <h1 className='tittle-page1'> Conectando ideias ao mundo digital </h1>
          <p className='par-page1'> Na CodesCrow, transformamos sua visão em experiências digitais excepcionais. Somos especialistas em criar sites e aplicativos que não apenas impressionam, mas também impulsionam seu sucesso online.  </p>
        </div>
        <div className='cont-email'>
          <input required className='text-email' type="text" />
          <label for="">Email@gmail.com</label>
          <button className='buttom-enviar'> Enviar </button>
        </div>
        <div className='portifolio-container'>
          <p className='cube-info'><img className='rotating-image' src={Progress} alt="" />Portifólio</p>

          <div>
            <h1 className='text-portifolio'>Projetos inovadores, interfaces intuitivas e soluções personalizadas que impulsionam a presença online de nossos clientes.</h1>
          </div>

        </div>
        { /* QUALIDADE/*/}

        <div className='portifolio-container'>
          <p className='cube-info'><img className='rotating-image' src={Progress} alt="" />Qualidade</p>
        </div>
        <div className='quality-container'>
          <h1 className='tittle-quality'>Projetos de alta qualidade que garantem a satisfação dos nossos clientes.</h1>
          <div className='quality-cube'>
            <div className='boxquality-container'>
              <img className='images-quality' src={ImagenOne} alt="" />
              <h1>Qualidade</h1>
              <p>Nosso compromisso com a qualidade é inegociável. Cada projeto que desenvolvemos passa por rigorosos processos de controle e garantia de qualidade para assegurar que cada detalhe atenda aos mais altos padrões.</p>

            </div>
            <div className='boxquality-container'>
              <img className='images-quality' src={Imagetwo} alt="" />
              <h1>Inovação</h1>
              <p>A inovação é o coração do nosso trabalho. Estamos constantemente explorando novas tecnologias, metodologias e tendências para trazer soluções criativas e modernas aos nossos projetos.</p>

            </div>
            <div className='boxquality-container'>
              <img className='images-quality' src={Imagethree} alt="" />
              <h1>Atendimento Personalizado</h1>
              <p>O atendimento personalizado é um dos pilares do nosso sucesso. Valorizamos cada cliente como único, com necessidades e expectativas específicas. Por isso, dedicamos tempo e esforço para entender profundamente os objetivos de cada cliente.</p>
            </div>
          </div>
        </div>


        { /* FORMULÁRIO/*/}
        <div className='cont-formulario'>
          <div>
            <div>
              <h1 className='title-formulario'>Transforme ideias em realidade digital: Peça seu orçamento!</h1>
              <p className='envie-msg'>Envie sua mensagem</p>
            </div>
            <div className='cont-formulario1'>
              <div>
                <input className='formulario1' type="text" placeholder='Digite seu nome*' />
              </div>
              <div>
                <input className='formulario2' type="text" placeholder='Digite seu telefone*' />
              </div>
            </div>
            <div>
              <input className='formulario3' type="text" placeholder='Digite seu email' />
            </div>
            <div>
              <input className='formulario4' type="text" placeholder='Descreva como deseja seu site' />
            </div>
            <div className='cont-formulario2'>
              <input className='check' type="checkbox" />
              <p className='text-formulario2'>Sim, desejo receber comunicações por telefone/e-mail sobre os serviços da Empresa.</p>
            </div>
            <div>
              <button className='subimit'>SUBIMIT</button>
              <button className='reset'>RESET</button>
            </div>
          </div>
        </div>
        { /* FORMULÁRIO/*/}
      </div>





      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  )
}

export default Home 