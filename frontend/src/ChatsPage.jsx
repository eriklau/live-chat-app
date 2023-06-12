import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

export default function ChatsPage(props) {
    const chatProps = useMultiChatLogic(
        'aa13a545-8a83-4fe2-9525-ead7dd8c55d5', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}
