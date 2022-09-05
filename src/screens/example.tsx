/* eslint-disable react-native/no-inline-styles */
import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../components';
import { videos } from '../constants';
import { PlayerContext } from '../state/context';
import { setPlayerPoint } from '../state/reducer';
import { palette } from '../theme/palette';
import { width } from '../utils';

export const Example = () => {
  const { colors, dark } = useTheme();
  const insets = useSafeAreaInsets();
  const { dispatch } = useContext(PlayerContext);
  const onPress = () => {
    dispatch(setPlayerPoint(0));
  };
  return (
    <View style={{ flex: 1, backgroundColor: palette.B(1) }}>
      <ScrollView
        style={{
          marginTop: insets.top,
          flex: 1,
          backgroundColor: colors.background,
        }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 120 }}>
        {videos.map((item, i) => (
          <TouchableHighlight
            onPress={onPress}
            underlayColor={dark ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.2)'}
            key={`${i}`}>
            <View style={{ paddingBottom: 12 }}>
              <FastImage
                source={{
                  uri: item.cover,
                }}
                style={{ width, height: (width * 9) / 16 }}
              />
              <View
                style={{
                  marginTop: 8,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FastImage
                  source={{ uri: item.avatar }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />
                <View style={{ flex: 1 }}>
                  <Text
                    h5
                    tx={item.title}
                    color={colors.text}
                    style={{ flex: 1 }}
                    numberOfLines={1}
                  />
                  <Text
                    t3
                    tx={`${item.author} · ${item.pv} views`}
                    color={palette.G4(1)}
                    style={{ flex: 1 }}
                  />
                </View>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};
