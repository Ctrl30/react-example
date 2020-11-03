import React from 'react'
import ThemedButton from './themedButton' 

export default function ContextTest(props) {
    console.log('ppppppppp',props.context)
    return (
        <div>
        <ThemedButton />
    </div>
    )
}
