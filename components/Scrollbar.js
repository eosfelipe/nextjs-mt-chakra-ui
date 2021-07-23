import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useEffect, useRef } from 'react'

const animate = keyframes`
0%,
100% {
  filter: hue-rotate(0deg);
}
50% {
  filter: hue-rotate(360deg);
  }
`

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 5px;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: ${animate} 5s linear infinite;
  z-index: 9999;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #008aff, #00ffe7);
      filter: blur(30px);
    }
  }
`
const ScrollPath = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
`

const Scrollbar = () => {
  const pb = useRef(null)

  useEffect(() => {
    const body = window.document.body
    const html = window.document.documentElement
    const totalHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    function handleScroll() {
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      if (progressHeight < 100) {
        progressHeight = progressHeight * 1.16
      }
      pb.current.style.height = `${progressHeight}%`
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ProgressBar ref={pb}>
        <ScrollPath />
      </ProgressBar>
    </>
  )
}

export default Scrollbar
