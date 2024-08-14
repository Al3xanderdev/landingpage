import cubes_icon from '../res/free-icon-cube-3412242 1.svg'
import hexes_icon from '../res/3hexes.svg'
import panel_icon from '../res/panel.svg'
import hierarchy_icon from '../res/hierarchy.svg'

const ModulePage: React.FC = () => {
  return (
    <div className='maindiv'>
      <div className="div1">
        <img className='div1pic' src={cubes_icon} alt='' />
        <div className='div1_1'>
          <div className='div1_1text1'>Модули системы</div>
          <div className='div1_1text2'>Ellipse — это модульная система для управления бизнес-процессами, которая позволяет добавлять или убирать модули в соответствии с вашими потребностями.</div>
        </div>
      </div>

      <div className='div2'>
        <div className='div2_1'>
          <img className='div2_1pic' src={hexes_icon} alt=''/>
          <div className='div2_1text1'>Модульность</div>
          <div className='div2_1text2'>Мы можем гибко адаптировать нашу систему под потребности каждого проекта, обеспечивая оптимальную функциональность и эффективность.</div>
        </div>

        <div className='div2_2'>
          <div className='div2_2_1'>
            <img className='div2_2_1pic' src={panel_icon} alt='' />
            <div className='div2_2_1text'>
              <div className='div2_2_1text1'>Простота интерфейса</div>
              <div className='div2_2_1text2'>Интуитивно понятный и минималистичный интерфейс позволяет пользователям без специальных навыков легко освоить работу в нашем портале.</div>
            </div>
          </div>
          <div className='div2_2_2'>
            <img className='div2_2_2pic' src={hierarchy_icon} alt='' />
            <div className='div2_2_1text'>
              <div className='div2_2_2text1'>Централизованность информации</div>
              <div className='div2_2_2text2'>Вся информация аккумулируется в одной системе, обеспечивая удобный доступ к этапам согласования и перепискам по проекту.</div>
            </div>                 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModulePage