import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillMobile, AiFillMail} from 'react-icons/ai'
import Image from 'next/image'; 
import pic from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';



export default function Home() {

  return (
    <div >
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-3xl uppercase font-burtons'>Bhaskar</h1>
            <ul className='flex items-center'>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
              <li></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl text-teal-600 font-medium'>Bhaskar Hegde</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-medium py-5 leading-8 text-gray-800'>Works in  Accenture PVT</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a className='hover:text-black' href="https://github.com/Bhaskar104" target='_blank'><AiFillGithub/></a>
          <a className='hover:text-blue-800' href="https://www.linkedin.com/in/bhaskar-hegde-a24359159/" target='_blank'> <AiFillLinkedin /></a>
          <a className='hover:text-red-800' href="https://studio.youtube.com/channel/UC1gEJ0GJpKKMwOrSekrgFQQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target='_blank'><AiFillYoutube /></a>
           
            
          </div>
          <div className='relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto'>
            <Image src={pic} fill style={{objectFit : 'cover'}} />
          </div>
        </section>

        <section>
          <div >
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              <span className='text-teal-500'>Ipsa quas magni nemo </span> laboriosam <span className='text-teal-500'>commodi minima, quibusdam ut voluptatem vel fuga et repellat quasi in, reiciendis quam provident, cum consequatur voluptatibus.</span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis quae voluptatem recusandae sint obcaecati facere officiis et ad fugiat neque dolore quasi harum aliquam quidem pariatur reiciendis, dolor accusamus?</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='relative m-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo eaque facilis reprehenderit quisquam minima modi vero mollitia, neque illo?</p>
              <h4 className='py-4 text-teal-600'>Design Tools I used</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Eclipse</p>
              <p className='text-gray-800 py-1'>STS</p>
              <p className='text-gray-800 py-1'>VSCode</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} className='relative m-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo eaque facilis reprehenderit quisquam minima modi vero mollitia, neque illo?</p>
              <h4 className='py-4 text-teal-600'>Design Tools I used</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Eclipse</p>
              <p className='text-gray-800 py-1'>STS</p>
              <p className='text-gray-800 py-1'>VSCode</p>
            </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={consulting} width={100} height={100} className='relative m-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo eaque facilis reprehenderit quisquam minima modi vero mollitia, neque illo?</p>
                <h4 className='py-4 text-teal-600'>Design Tools I used</h4>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Eclipse</p>
                <p className='text-gray-800 py-1'>STS</p>
                <p className='text-gray-800 py-1'>VSCode</p>
              </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              <span className='text-teal-500'>Ipsa quas magni nemo </span> laboriosam <span className='text-teal-500'>commodi minima, quibusdam ut voluptatem vel fuga et repellat quasi in, reiciendis quam provident, cum consequatur voluptatibus.</span>
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-wrap'>
            <div><Image  src={web1}className='rounded-lg obeject-cover'></Image></div>
            <div><Image  src={web2}className='rounded-lg obeject-cover'></Image></div>
            <div><Image  src={web3}className='rounded-lg obeject-cover'></Image></div>
            <div><Image  src={web4}className='rounded-lg obeject-cover'></Image></div>
            <div><Image  src={web5}className='rounded-lg obeject-cover'></Image></div>
            <div><Image  src={web6}className='rounded-lg obeject-cover'></Image></div>
          </div>
        </section>
        <footer className='m-10'> 
          <p className='text-2xl py-1'>Contact Me</p>
          <div >
            <div className='flex justify-between'>
            <p className='hover:text-teal-800 flex gap-4'><AiFillMobile className='text-3xl'/>+91 9380278094</p>
            <p className='hover:text-teal-800 flex gap-4'><AiFillMail className='text-3xl '/>189bkh@gmail.com</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
