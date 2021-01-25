import { toJS } from 'mobx'
import request   from './request'
import { param } from './params'
import { Component } from 'react'

export default class BaseActions extends Component {
  

  get = async (api) => {
    
    let data = await request(api)
    return toJS(data)
  }

  post = async (api, params) => {
    return await request(
      api,
      {
        method: 'POST',
        data:params
      },

    )
  }

}