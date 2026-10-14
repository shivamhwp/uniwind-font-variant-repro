import './global.css'

import { SafeAreaView, Text, View } from 'react-native'
import { useResolveClassNames } from 'uniwind'

export default function App() {
    const resolvedStyle = useResolveClassNames('tabular-nums')

    console.log('resolved tabular-nums style', JSON.stringify(resolvedStyle))
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 items-center justify-center gap-4 px-6">
                <Text className="text-xl font-bold">Uniwind font variant reproduction</Text>
                <Text className="tabular-nums text-4xl">0123456789</Text>
                <Text className="text-center text-gray-600">
                    Resolved style: {JSON.stringify(resolvedStyle)}
                </Text>
            </View>
        </SafeAreaView>
    )
}
