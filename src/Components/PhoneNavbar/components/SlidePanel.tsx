/** @format */
import {CSSTransition} from 'react-transition-group'
import React, {useRef} from 'react'

export default function SlidePanel(props) {
  return (
    <CSSTransition
      nodeRef={props.ref}
      in={props.in}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      {() => props.render(props.ref)}
    </CSSTransition>
  )
}

/**
 *
 * <SlidePanel in={in} ref={ref} render={ (ref) => {
 *          <Panel ref={ref} />} }/>
 */
