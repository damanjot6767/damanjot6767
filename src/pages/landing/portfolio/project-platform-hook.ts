import React from 'react'
import AppleStore from '../../../assets/images/apple-store.png'
import PlayStore from '../../../assets/images/play-store.png'
import Website from '../../../assets/images/website.png'

export const useProjectPlatformHook = () => {
  return {
    "ios": AppleStore,
    "android": PlayStore,
    "web": Website
  }
}
