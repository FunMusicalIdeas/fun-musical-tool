import { Dispatch } from 'redux'
import { EntityConfig } from './compile/types'
import { Entities, Scales } from './types'
import { Frequency, Scalar } from './utilities/nominalTypes'

enum SongName {
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafu with pitch circularity',
    STEPWISE = 'stepwise',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaos',
}

interface Config {
    baseFrequency: Frequency,
    durationScalar: Scalar,
    // tslint:disable-next-line:no-any
    [index: string]: any,
}

interface Song {
    compile: (song: Song) => Promise<Entities>,
    config: Config,
    description: string,
    entityConfigs: EntityConfig[],
    formattedName: string,
    handleConfigChange: (dispatch: Dispatch, configKey: string, configValue: string, song: Song) => void,
    name: SongName,
    scales: Scales,
}

export {
    Song,
    SongName,
    Config,
}
