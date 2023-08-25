import { Icon } from '@iconify/react';

import { sectionData } from './data/sectionData';

const App: React.FC = () => {
  const icons = ['mdi:instagram', 'mingcute:twitter-line'];

  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='container-section'>
          {sectionData.map((x) => (
            <div key={x.title} className='section'>
              <p>{x.title}</p>
              <ul>
                {x.items.map((y) => (
                  <li key={y.name}>
                    <a href={y.src}>{y.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='section'>
            <p>Follow us</p>
            <div className='container-icon'>
              {icons.map((x, index) => (
                <Icon key={index} icon={x} className='icon' />
              ))}
            </div>
          </div>
        </div>

        <div className='container-copy-right'>
          <Icon icon='logos:codebeat' className='company-logo' />
          <small>&copy; 2023 WebDevDaily All rights reserved</small>
        </div>
      </div>
    </div>
  );
};

export default App;
