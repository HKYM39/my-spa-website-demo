import type { Draft } from "immer";
import { freeze, produce } from "immer";
import { useCallback, useState } from "react";

export type DraftFunction<T> = (draft: Draft<T>) => void;
export type Updater<T> = (args: T | DraftFunction<T>) => void;
export type ImmerHooks<T> = [T, Updater<T>];

export function useImmer<T = unknown>(initValue: T | (() => T)): ImmerHooks<T> {
	const [state, setState] = useState(
		freeze(
			typeof initValue === "function" ? (initValue as () => T)() : initValue,
			true,
		),
	);
	const updateState = useCallback((updater: T | DraftFunction<T>) => {
		if (typeof updater === "function") {
			setState(produce(updater as DraftFunction<T>));
		} else {
			setState(updater);
		}
	}, []);

	return [state, updateState];
}
