import React, { PureComponent } from 'react'
import { ChildContext, TestContexts } from '@/store/context.js'

class Sun extends PureComponent {
  static contextType = TestContexts
  render(){
    console.log(this)
    return (
        <h1>
          <TestContexts.Consumer>{ context => context.name }</TestContexts.Consumer>
          <TestContexts.Consumer>{ context => context.age }</TestContexts.Consumer>
          <ChildContext.Consumer>{ context => context.sex }</ChildContext.Consumer>
        </h1>
    )
  }
}
export default Sun
