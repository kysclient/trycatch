import {atom, atomFamily, selector} from 'recoil';

export const exampleState = atom<String>({
    key: 'exampleAtom',
    default: "Hello, World",
})

export const selectorTrigger = atomFamily<number, string>({
    key: 'selectorTrigger',
    default: Date.now(),
})

export const someListSelector = selector<"SomeListType">({
    key: 'someList',
    get: async ({ get }) => {
        get(selectorTrigger('someList'))
        const list = await "api call";
        return list;
    },
    set: ({ set }) => {
        set(selectorTrigger('someList'), Date.now())
    }
})
