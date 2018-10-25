import { SongID } from '../songIds'
import { ImmutableThreads } from '../state/threadsState'
import { ImmutableUI } from '../state/uiState'
import {
    HandleSongChangeEvent,
    HandleSongSpecBlurEvent,
    HandleSongSpecChangeEvent,
    HandleSongSpecSubmitEvent,
} from '../ui/types'
import { Maybe } from '../utilities/types'

interface AppProps {
    songId: Maybe<SongID>,
}

interface SongSelectPropsFromState {
    threads: ImmutableThreads,
}

interface SongSelectPropsFromDispatch {
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface SongSelectProps extends SongSelectPropsFromState, SongSelectPropsFromDispatch {
}

interface SongSpecInputsPropsFromState {
    threads: ImmutableThreads,
    ui: ImmutableUI,
}

interface SongSpecInputsPropsFromDispatch {
    handleSongSpecBlurEvent: HandleSongSpecBlurEvent,
    handleSongSpecChangeEvent: HandleSongSpecChangeEvent,
    handleSongSpecSubmitEvent: HandleSongSpecSubmitEvent,
}

interface SongSpecInputsPropsFromParent {
    songId: SongID,
}

interface SongSpecInputsProps extends SongSpecInputsPropsFromState,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputsPropsFromParent {
}

interface SongSpecInputProps {
    songSpecInputsProps: SongSpecInputsProps,
    songSpecKey: string,
}

export {
    AppProps,
    SongSpecInputsProps,
    SongSpecInputsPropsFromState,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputProps,
    SongSelectProps,
    SongSelectPropsFromState,
    SongSelectPropsFromDispatch,
}
