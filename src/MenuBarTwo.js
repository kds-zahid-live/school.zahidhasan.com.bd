
import './MenuBarTwo.css'
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Subtopnav = ({ menuData }) => {
  const subtopnavRef = useRef(null);
  const scrollLeftBtnRef = useRef(null);
  const scrollRightBtnRef = useRef(null);

  const [activateSubtopnavScroll, setActivateSubtopnavScroll] = useState(0);
  const [fromScrollPos, setFromScrollPos] = useState(-1);
  const [currentScrollPos, setCurrentScrollPos] = useState(-1);
  const [gotoTut, setGotoTut] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [scrollInterval, setScrollInterval] = useState(null);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [exceedScrollLeft, setExceedScrollLeft] = useState(0);

  const startScrollingSubtopnav = (event) => {
    event.preventDefault();
    setFromScrollPos(event.clientX);
    setActivateSubtopnavScroll(1);
  };

  const scrollingSubtopnav = (event) => {
    setCurrentScrollPos(event.clientX);
    if (currentScrollPos === fromScrollPos) return;
    event.preventDefault();
    if (event.buttons === 0) return;

    if (activateSubtopnavScroll === 1) {
      setGotoTut(0);
      const newScrollSpeed = Math.abs(currentScrollPos - fromScrollPos);
      if (currentScrollPos < fromScrollPos) {
        scrollLeftBtnRef.current.style.display = 'block';
        subtopnavRef.current.scrollLeft += newScrollSpeed;
      } else {
        subtopnavRef.current.scrollLeft -= newScrollSpeed;
      }
      scrollBtnVisible();
      setFromScrollPos(currentScrollPos);
    }
  };

  const endScrollingSubtopnav = (event) => {
    event.preventDefault();
    setActivateSubtopnavScroll(0);
    setFromScrollPos(-1);
    setCurrentScrollPos(-1);
  };

  const pellessii = (event) => {
    if (gotoTut === 0) {
      event.preventDefault();
      setGotoTut(1);
      return false;
    }
  };

  const scrollMeNow = (direction) => {
    const interval = window.setInterval(() => {
      setScrollSpeed((prevSpeed) => {
        const newSpeed = Math.min(prevSpeed * 1.1, 10);
        if (direction === 1) {
          subtopnavRef.current.scrollLeft += newSpeed;
        } else {
          subtopnavRef.current.scrollLeft -= newSpeed;
        }
        scrollBtnVisible();
        return newSpeed;
      });
    }, 10);
    setScrollInterval(interval);
  };

  const stopScrollMeNow = () => {
    setScrollSpeed(1);
    clearInterval(scrollInterval);
  };

  const scrollBtnVisible = () => {
    const currentScrollLeft = subtopnavRef.current.scrollLeft;
    if (currentScrollLeft < 1) {
      scrollLeftBtnRef.current.style.display = 'none';
    } else {
      scrollLeftBtnRef.current.style.display = 'block';
    }

    if (currentScrollLeft > 1 && currentScrollLeft === prevScrollLeft) {
      setExceedScrollLeft((prev) => prev + 1);
    } else {
      setExceedScrollLeft(0);
    }

    if (exceedScrollLeft > 3) {
      scrollRightBtnRef.current.style.display = 'none';
    } else {
      scrollRightBtnRef.current.style.display = 'block';
    }
    setPrevScrollLeft(currentScrollLeft);
  };

  useEffect(() => {
    scrollBtnVisible();
    // Cleanup the interval on unmount
    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrollInterval]);

  useEffect(() => {
    subtopnavIntoView();
  }, []);

  const subtopnavIntoView = () => {
    const a = subtopnavRef.current;
    if (!a || !a.getElementsByClassName) return;
    const x = a.getElementsByTagName('A');
    const b = window.location.pathname;
    for (let i = 0; i < x.length; i++) {
      const c = x[i].pathname;
      if (
        (b.includes('/python/numpy/') && c === '/python/numpy/default.asp') ||
        (b.includes('/python/pandas/') && c === '/python/pandas/default.asp') ||
        (b.includes('/python/scipy/') && c === '/python/scipy/index.php')
      ) {
        x[i].classList.add('active');
        break;
      }
    }
    const d = a.getElementsByClassName('active');
    if (d.length < 1) return;
    let i = 0;
    while (!amIIntoView(a, d[0])) {
      i++;
      if (i > 1000) break;
      a.scrollLeft += 10;
    }
    scrollBtnVisible();
  };

  const amIIntoView = (x, y) => {
    const a = x.scrollLeft;
    const b = a + window.innerWidth;
    const ytop = y.offsetLeft;
    const c = y.offsetWidth;
    const d = document.getElementById('btn_container_subtopnav')
      ? document.getElementById('btn_container_subtopnav').offsetWidth
      : 0;
    const ybottom = ytop + c + d + 20;
    return ybottom <= b && ytop >= a;
  };

  return (
    <div
      id="subtopnav"
      ref={subtopnavRef}
      onMouseDown={startScrollingSubtopnav}
      onMouseMove={scrollingSubtopnav}
      onMouseUp={endScrollingSubtopnav}
      onClick={pellessii}
    >



      <div
        id="scroll_left_btnnn"
        ref={scrollLeftBtnRef}
        className="w3-hide-medium w3-hide-small"
        style={{ display: 'none',backgroundColor:'red' }}
      >
      </div>
      

      <div
        id="scroll_left_btn"
        ref={scrollLeftBtnRef}
        className="w3-hide-medium w3-hide-small"
        style={{ display: 'hide' }}
      >
        <span
          onMouseDown={() => scrollMeNow(-1)}
          onMouseUp={stopScrollMeNow}
          onMouseOut={stopScrollMeNow}
        >
          &nbsp;&nbsp;&nbsp;❮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      
<div id="btn_container_subtopnav">
        <div
          id="scroll_right_btn"
          ref={scrollRightBtnRef}
          className="w3-hide-medium w3-hide-small"
          style={{ display: 'block' }}
        >
          <span
            onMouseDown={() => scrollMeNow(1)}
            onMouseUp={stopScrollMeNow}
            onMouseOut={stopScrollMeNow}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❯&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>


            {menuData.map((item, index) => (
              item.name !== 'Home' && (
                  <Link  key={index} to={item.path}>{item.name}</Link>
              )
            ))}



        {/* {menuData.map((item, index) => (
              item.name !== 'Home' && (
                  <a  key={index} href={item.path} >{item.name}</a>
              )
            ))} */}

            

      <a href="javascript:void(0)" style={{ width: '50px', visibility: 'hidden' }}></a>

      


      
    </div>
  );
};

export default Subtopnav;
