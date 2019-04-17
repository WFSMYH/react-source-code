/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import type {RefObject} from 'shared/ReactTypes';

// an immutable object with a single mutable value
export function createRef(): RefObject {
  const refObject = { // 创建了一个refObject声明current属性为null
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject; // 返回对象
}
