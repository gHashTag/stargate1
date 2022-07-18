import React from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { FormMovie, Header, Space } from '../../components'
import { BLUE, WHITE } from '../../constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { useDispatch } from 'react-redux'
import { createNew } from '../../store/movieSlice'

export function AddMovieScreen({ navigation }) {
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()
  function handleSubmit(form) {
    dispatch(createNew(form))
    navigation.navigate('HOME_SCREEN')
  }

  return (
    <>
      <Header
        title={'Your movie'}
        onPress={() => navigation.goBack()}
        iconLeft="ios-arrow-back"
        headerColor={BLUE}
        colorLeft={WHITE}
      />
      <KeyboardAvoidingView
        style={flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView>
          <View style={screenCont}>
            <Space height={50} />
            <FormMovie onSubmit={handleSubmit} />
          </View>
          <Space height={70} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  screenCont: {
    flex: 1,
    alignItems: 'center'
  },
  flex1: {
    flex: 1
  }
})
const { screenCont, flex1 } = styles
