import logo from '../assets/logo.svg'
import { footerData } from '../utils/constants'
  
  export default function Footer() {
    return (
      <footer id='footer' aria-labelledby="footer-heading">
        <div className="flex justify-center py-20">
          <div className="flex flex-wrap gap-6">
                <div className="grid lg:col-start-1 lg:col-end-2 col-start-2 col-end-3 row-start-2 lg:grid-cols-4 grid-cols-2 gap-6 px-4 lg:container">
                  <div>
                    <img
                      className="w-[11.18rem] h-auto mb-[5.285rem]"
                      src={logo}
                      alt="Company name"
                    />
                    <p className="text-[1.125rem] leading-[1.875rem] text-footer w-full">
                    © 2020 Startupz. <br /> All rights reserved. 
                    </p>
                </div>
                <div className='lg:col-start-2 lg:col-end-3 col-start-1 col-end-2 row-start-1'>
                  <h3 className="footerTitle">Companies</h3>
                  <ul>
                    {footerData.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-[1.125rem] leading-[2.188rem] text-light-blue hover:opacity-80">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='lg:col-start-3 lg:col-end-4 col-start-2 col-end-3 row-start-1'>
                  <h3 className="footerTitle">Contact</h3>
                  <div className="text-[1.125rem] leading-[1.5rem] text-footer w-full max-w-[19rem]">
                    <p>{footerData.contact.address}</p>
                    <p>{footerData.contact.city}</p>
                    <p className="text-[1.125rem] leading-[1.875rem] text-light-blue mt-[0.688rem] hover:opacity-80">
                        <a href='mailto:startupz@gmail.com'>{footerData.contact.mailMessage}</a>
                    </p>
                  </div>
              </div>
              <div className="lg:col-start-4 lg:col-end-5 col-start-1 col-end-2 row-start-2 lg:row-start-1">
                <div><h3 className="footerTitle">Follow us</h3></div>
                <div className="flex flex-col justify-center items">
                    {footerData.social.map((item) => (
                    <a href={item.href} key={item.name}>
                        <img key={item.name} src={item.icon} alt={item.name} className="w-6 h-6 mb-6 cursor-pointer hover:opacity-80" />
                    </a>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  