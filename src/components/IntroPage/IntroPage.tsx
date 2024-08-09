import se_logo_icon from '../res/superellipse-logo.svg'
import logout_icon from '../res/log-out-01.svg'
import arrowright_icon from '../res/arrow-narrow-right.svg'

const IntroPage: React.FC = () => {
  return (
    <div className='background'>
      <div className='header1'>
        <img className='logo' src={se_logo_icon} alt=''/>
        <div className='buttons'>
          <button className='headerbutton1'>
            <div className='headerbutton1text'>Начать бесплатно</div>
          </button>
          <button className='headerbutton2'>
            <img className='headerbutton2pic' src={logout_icon} alt='' />
            <div className='headerbutton2text'>Войти</div>
          </button>
        </div>
      </div>

      <div className='bodydiv1'>
        <div className='bodydiv2'>
          <button className='bodyupperbutton'>
            <div className='bodyupperbuttontext'>Демоверсия</div>
          </button>
          <div className='bodydiv3'>
            <div className='bodydiv3text1'>Ellipse - система комфортного ведения бизнеса</div>
            <div className='bodydiv3text2'>Единое решение для управления проектами и коммуникации вашей команды</div>
          </div>
        </div>
        <button className='bodylowerbutton'>
          <div className='bodylowerbuttontext'>Демоверсия</div>
          <img className='bodylowerbuttonpic' src={arrowright_icon} alt='' />
        </button>
      </div>
    </div>
  )
}

export default IntroPage