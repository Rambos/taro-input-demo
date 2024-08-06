import { View, Text, Button, Input } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useCallback, useState } from 'react'

export default function Index () {
  const [focus, setFocus] = useState(false)
  useLoad(() => {
    console.log('Page loaded.')
  })

  // 如果添加了onFoucs事件，点击按钮获得焦点会出现flushSync渲染警告， 如果移除onFocus则正常
  const onFocus = () => {
    console.log('focus')
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button type='primary' onClick={() => {
        setFocus(true)
      }}
      >点击获得焦点</Button>
      <Input focus={focus} onFocus={onFocus} onBlur={() => {
        setFocus(false)
      }} style={{marginTop: '10px', border: '1px solid #eee', padding: '10px'}} placeholder='获得焦点'
      />
    </View>
  )
}
