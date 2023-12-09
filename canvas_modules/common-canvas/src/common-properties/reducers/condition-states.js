/*
 * Copyright 2017-2023 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SET_CONDITION_STATES, UPDATE_CONDITION_STATES } from "../actions";

/*
* Stores the state information for all controls.  States are stored as objects with keys being name, row, col.
* All keys need to be strings
*/
function states(state = {}, action) {
	switch (action.type) {
	case UPDATE_CONDITION_STATES: {
		let newState = state;
		newState = action.property;
		return Object.assign({}, newState);
	}
	case SET_CONDITION_STATES: {
		const newState = state;
		newState[action.property.id] = {
			propertyId: action.property.id,
			defaultValue: action.property.value,
			displayState: action.property.displayState,
		};
		return Object.assign({}, state, newState);
	}
	default: {
		return state;
	}
	}
}

export default states;
