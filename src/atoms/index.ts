import React from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

export const firstState = atom<string>({
    key: 'firstSelected',
    default: '',
});

export const secondState = atom<string>({
    key: 'secondSelected',
    default: '',
});

export const thirdState = atom<string>({
    key: 'thirdSelected',
    default: '',
});

export const fourthState = atom<string>({
    key: 'fourthSeleted',
    default: '',
});
