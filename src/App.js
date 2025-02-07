import React, { useState } from 'react';
import ChatGPTCodeBox from './ChatGPTCodeBox';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './logo.svg'; 
import logofav from './logo-fav.svg'; 
import Homepage from './pages/Homepage';
import MenuBarTwo from './MenuBarTwo';

//img
import NotFoundimg from './pages/img/hero/notfound/notfound.webp'

// Home Page
function Home() {
  return (
    <div>Home
      <h1>Hello World</h1>
    </div>
    
  );
}
// 404
function NotFound(){
  return(
    <div style={{ height: '100%', backgroundColor: 'white' }} className='flex items-center justify-center h-screen bg-white'>
      <img src={NotFoundimg} alt='404' />
    </div>
  );
}

function HtmlPage() {
  return (
    <div>
      <h1>HTML Main Page</h1>
      <ChatGPTCodeBox
                language="html"
                code={`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>


                `}
      />
      <p>This is the main page for HTML content.</p>
    </div>
  );
}

function Introduction() {
  return <h1>Introduction</h1>;
}

function Html11Page() {
  return <h1>HTML1-1 Page Content Changed</h1>;
}

function Html12Page() {
  return <h1>HTML1-2 Page Content</h1>;
}

function Html2Page() {
  return <h1>HTML2 Page Content</h1>;
}

function CssPage() {
  return (
    <div>
      <h1>CSS Main Page</h1>
      <p>This is the main page for CSS content.</p>
    </div>
  );
}

function Css1Page() {
  return <h1>CSS1 Page Content</h1>;
}

function Css11Page() {
  return <h1>CSS1-1 Page Content</h1>;
}

function Css12Page() {
  return <h1>CSS1-2 Page Content</h1>;
}

function Css2Page() {
  return <h1>CSS2 Page Content</h1>;
}

function JavaScriptPage() {
  return (
    <div>
      <h1>JavaScript Main Page</h1>
      <p>This is the main page for JavaScript content.</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className='testgallery'>
      <h1>Gallery</h1>
      <p>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
      <img src='' alt='' />
      <div className='imgimg'>
        <img className='' src="/img/profile/1.jpg" alt="Zj"/>
        <img className='' src="/img/profile/2.jpg" alt="Zj"/>
        <img className='' src="/img/profile/3.jpg" alt="Zj"/>
        <img className='' src="/img/profile/4.webp" alt="Zj"/>
        <img className='' src="/img/profile/5.webp" alt="Zj"/>

        {/* <img className='' src="https://cdn3d.iconscout.com/3d/premium/thumb/html-file-10133798-8248605.png?f=webp" alt="Zj"/> */}

        <br />

      </div>
    </div>
  );
}
function Content() {
  return (
    <div className='testgallery'>
      <h1>Content</h1>
      <p>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
      
      <p>
      <h2>I Help Small Businesses Get Found on Google: Here’s My Advice for DIY SEO
      </h2>
        <img className='' src="/img/1.png" alt="Zj"/>
        SEO is an amazing long-term marketing tool for small business owners. Unlike channels like social media and paid ads that stop working when you stop engaging or paying, search engine optimization continues to build on itself if you do it correctly. 

        As an SEO consultant, I’ve loved helping hundreds of clients and students get their websites and content on the first page of Google. 

        But I’m no gatekeeper. As an SEO educator who regularly posts tutorials on my YouTube channel and has taught 20+ workshops (including a DIY SEO course for solopreneurs), I love breaking down SEO basics in a way that feels approachable.

        Which is exactly what I’m here to do now. Read on to learn some of the foundational steps any small business owner can take to improve search engine optimization.

        I promise it doesn’t have to be as technical or complicated as you might think, and you don’t even have to use fancy or expensive tools.

        By the end, I hope SEO feels less daunting and you have some clear steps forward.


        

      </p>
      <p>        
        <img className='' src="/img/2.jpg" alt="Zj"/>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
      <p>        
        <img className='' src="/img/3.jpg" alt="Zj"/>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
      <p>        
        <img className='' src="/img/4.jpg" alt="Zj"/>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
      <p>        
        <img className='' src="/img/5.jpg" alt="Zj"/>
        This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content. This is the main page for JavaScript content.

      </p>
    </div>
  );
}



// Menu data with components and nested submenus included
const menuData = [
  { name: 'Home', path: '/', component: <Homepage /> },
  {
    name: 'HTML',
    path: '/html',
    component: <HtmlPage />,
    submenu: [
      { 
        name: 'Introduction', path: '/html/introduction', component: <Introduction />
      },
      { 
        name: 'HTML3', path: '/html/html3', component: <div><h1>html3 main page</h1></div>,
        submenu: [
          { name: 'HTML31', path: '/html/html3/html31', component: <div>html3 1</div> },
          { name: 'HTML32', path: '/html/html3/html32', component: <div>html3 2</div> }
        ]
      },
      { name: 'HTML2', path: '/html/html2', component: <Html2Page /> }
    ]
  },
  {
    name: 'CSS',
    path: '/css',
    component: <CssPage />,
    submenu: [
      { 
        name: 'CSS1', path: '/css/css1', component: <Css1Page />,
        submenu: [
          { name: 'CSS1-1', path: '/css/css1/css1-1', component: <Css11Page /> },
          { name: 'CSS1-2', path: '/css/css1/css1-2', component: <Css12Page /> }
        ]
      },
      { name: 'CSS2', path: '/css/css2', component: <Css2Page /> }
    ]
  },
  { name: 'Tailwind CSS', path: '/tailwindcss', component: <div>Tailwind CSS</div> },  
  { name: 'Bootstrap', path: '/bootstrap', component: <div>Bootstrap</div> },
  { name: 'StyleX', path: '/stylex', component: <div>StyleX</div> },
  { name: 'JavaScript', path: '/javascript', component: <JavaScriptPage /> },
  { name: 'TypeScript', path: '/typescript', component: <div>TypeScript</div> },
  { name: 'Python', path: '/python', component: <div>Python</div> },
  { name: 'PHP', path: '/php', component: <div>PHP</div> },
  { name: 'Node JS', path: '/nodejs', component: <div>Node JS</div> },
  { name: 'React JS', path: '/reactjs', component: <div>React JS</div> },
  { name: 'Next JS', path: '/nextjs', component: <div>Next JS</div> },
  { name: 'Vue JS', path: '/vuejs', component: <div>Vue JS</div> },
  { name: 'JQuery', path: '/jquery', component: <div>JQuery</div> },
  { name: 'Angular', path: '/angular', component: <div>Angular</div> },
  { name: 'Flutter', path: '/flutter', component: <div>Flutter</div> },
  { name: 'Express JS', path: '/expressjs', component: <div>Express JS</div> },
  { name: 'Mongo DB', path: '/mongodb', component: <div>Mongo DB</div> }, 
  { name: 'MySQL', path: '/mysql', component: <div>MySQL</div> }, 
  { name: 'SQLite', path: '/sqlite', component: <div>SQLite</div> }, 
  { name: 'PostgreSQL', path: '/postgresql', component: <div>PostgreSQL</div> },
  { name: 'Laravel', path: '/laravel', component: <div>Laravel</div> },
  { name: 'DJango', path: '/django', component: <div>DJango</div> },
  { name: 'Arduino', path: '/arduino', component: <div>Arduino</div> },
  { name: 'Unreal Engine', path: '/unreal', component: <div>Unreal Engine</div> },
  { name: 'Krita', path: '/krita', component: <div>Krita</div> },
  { name: 'Gallery', path: '/gallery', component: <Gallery /> },
  { name: 'Blogs', path: '/blogs', component: <Content /> },
];



function MenuBar() {
  return (
    <div>      
      <div className="menu-bar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Zj School" className="logo" />
          </Link>
        </div>
        {/* -----------------------------------------------menu-------------------------------------------- */}
        {/* <nav>
          <ul>
            {menuData.map((item, index) => (
              item.name !== 'Home' && (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              )
            ))}
          </ul>
        </nav> */}
      </div>
      <MenuBarTwo menuData={menuData} />      
    </div>
  );
}

function SideMenuBar() {
  const location = useLocation();
  const [expandedSubmenu, setExpandedSubmenu] = useState('');

  const toggleSubmenu = (path) => {
    setExpandedSubmenu((prev) => (prev === path ? '' : path));
  };

  const renderSubmenu = (submenu, parentPath = '', depth = 0) => {
    return (
      <ul>
        {submenu.map((subItem, subIndex) => {
          const fullPath = `${parentPath}${subItem.path}`;
          const isExpanded = expandedSubmenu === fullPath;

          return (
            <li key={subIndex} style={{ paddingLeft: `${depth * 20}px` }}>
              {subItem.submenu ? (
                <>
                  <a
                    href="#"
                    onClick={() => toggleSubmenu(fullPath)}
                    style={{ cursor: 'pointer' }}
                  >
                    {subItem.name}
                  </a>
                  {isExpanded && renderSubmenu(subItem.submenu, `${parentPath}${subItem.path}`, depth + 1)}
                </>
              ) : (
                <Link to={subItem.path}>{subItem.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const getCurrentSubmenu = () => {
    const currentItem = menuData.find(
      (item) => location.pathname === item.path || location.pathname.startsWith(item.path + '/')
    );
    return currentItem && currentItem.submenu ? currentItem.submenu : [];
  };

  const currentSubmenu = getCurrentSubmenu();

  if (currentSubmenu.length === 0) {
    return null; // Do not render SideMenuBar if there's no submenu
  }

  return (
    <div className="side-menu-bar">
      <nav>
        {renderSubmenu(currentSubmenu)}
      </nav>
    </div>
  );
}

function App() {
  const generateRoutes = (data) => {
    return data.map((item) => {
      if (item.submenu) {
        return (
          <React.Fragment key={item.path}>
            <Route path={item.path} element={item.component} />
            {generateRoutes(item.submenu)}
          </React.Fragment>
        );
      }
      return <Route key={item.path} path={item.path} element={item.component} />;
    });
  };

  return (
    <Router>
      <div className="App">
        <MenuBar />
        
        <div className="content-area">
          <SideMenuBar />
          <div className="main-content">
            <Routes>
              {generateRoutes(menuData)}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
