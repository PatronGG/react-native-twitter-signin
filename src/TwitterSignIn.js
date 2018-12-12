import { NativeModules } from 'react-native'

const { RNTwitterSignIn } = NativeModules

export class TwitterSignIn {
    init(consumerKey, consumerSecret) {
        return RNTwitterSignIn.init(consumerKey, consumerSecret)
    }

    async logIn() {
        return RNTwitterSignIn.logIn()
    }
}

export const TwitterSignInSingleton = new TwitterSignIn();