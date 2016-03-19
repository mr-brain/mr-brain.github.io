// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
// Licensed under MIT open source license http://opensource.org/licenses/MIT
// Orginal javascript code was by Mauricio Santos
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collections;
(function (collections) {
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var has = function (obj, prop) {
        return _hasOwnProperty.call(obj, prop);
    };
    function defaultCompare(a, b) {
        if (a < b) {
            return -1;
        }
        else if (a === b) {
            return 0;
        }
        else {
            return 1;
        }
    }
    collections.defaultCompare = defaultCompare;
    function defaultEquals(a, b) {
        return a === b;
    }
    collections.defaultEquals = defaultEquals;
    function defaultToString(item) {
        if (item === null) {
            return 'COLLECTION_NULL';
        }
        else if (collections.isUndefined(item)) {
            return 'COLLECTION_UNDEFINED';
        }
        else if (collections.isString(item)) {
            return '$s' + item;
        }
        else {
            return '$o' + item.toString();
        }
    }
    collections.defaultToString = defaultToString;
    function makeString(item, join) {
        if (join === void 0) { join = ","; }
        if (item === null) {
            return 'COLLECTION_NULL';
        }
        else if (collections.isUndefined(item)) {
            return 'COLLECTION_UNDEFINED';
        }
        else if (collections.isString(item)) {
            return item.toString();
        }
        else {
            var toret = "{";
            var first = true;
            for (var prop in item) {
                if (has(item, prop)) {
                    if (first)
                        first = false;
                    else
                        toret = toret + join;
                    toret = toret + prop + ":" + item[prop];
                }
            }
            return toret + "}";
        }
    }
    collections.makeString = makeString;
    function isFunction(func) {
        return (typeof func) === 'function';
    }
    collections.isFunction = isFunction;
    function isUndefined(obj) {
        return (typeof obj) === 'undefined';
    }
    collections.isUndefined = isUndefined;
    function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }
    collections.isString = isString;
    function reverseCompareFunction(compareFunction) {
        if (!collections.isFunction(compareFunction)) {
            return function (a, b) {
                if (a < b) {
                    return 1;
                }
                else if (a === b) {
                    return 0;
                }
                else {
                    return -1;
                }
            };
        }
        else {
            return function (d, v) {
                return compareFunction(d, v) * -1;
            };
        }
    }
    collections.reverseCompareFunction = reverseCompareFunction;
    function compareToEquals(compareFunction) {
        return function (a, b) {
            return compareFunction(a, b) === 0;
        };
    }
    collections.compareToEquals = compareToEquals;
    var arrays;
    (function (arrays) {
        function indexOf(array, item, equalsFunction) {
            var equals = equalsFunction || collections.defaultEquals;
            var length = array.length;
            for (var i = 0; i < length; i++) {
                if (equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        }
        arrays.indexOf = indexOf;
        function lastIndexOf(array, item, equalsFunction) {
            var equals = equalsFunction || collections.defaultEquals;
            var length = array.length;
            for (var i = length - 1; i >= 0; i--) {
                if (equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        }
        arrays.lastIndexOf = lastIndexOf;
        function contains(array, item, equalsFunction) {
            return arrays.indexOf(array, item, equalsFunction) >= 0;
        }
        arrays.contains = contains;
        function remove(array, item, equalsFunction) {
            var index = arrays.indexOf(array, item, equalsFunction);
            if (index < 0) {
                return false;
            }
            array.splice(index, 1);
            return true;
        }
        arrays.remove = remove;
        function frequency(array, item, equalsFunction) {
            var equals = equalsFunction || collections.defaultEquals;
            var length = array.length;
            var freq = 0;
            for (var i = 0; i < length; i++) {
                if (equals(array[i], item)) {
                    freq++;
                }
            }
            return freq;
        }
        arrays.frequency = frequency;
        function equals(array1, array2, equalsFunction) {
            var equals = equalsFunction || collections.defaultEquals;
            if (array1.length !== array2.length) {
                return false;
            }
            var length = array1.length;
            for (var i = 0; i < length; i++) {
                if (!equals(array1[i], array2[i])) {
                    return false;
                }
            }
            return true;
        }
        arrays.equals = equals;
        function copy(array) {
            return array.concat();
        }
        arrays.copy = copy;
        function swap(array, i, j) {
            if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
                return false;
            }
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            return true;
        }
        arrays.swap = swap;
        function toString(array) {
            return '[' + array.toString() + ']';
        }
        arrays.toString = toString;
        function forEach(array, callback) {
            var lenght = array.length;
            for (var i = 0; i < lenght; i++) {
                if (callback(array[i]) === false) {
                    return;
                }
            }
        }
        arrays.forEach = forEach;
    })(arrays = collections.arrays || (collections.arrays = {}));
    var LinkedList = (function () {
        function LinkedList() {
            this.firstNode = null;
            this.lastNode = null;
            this.nElements = 0;
        }
        LinkedList.prototype.add = function (item, index) {
            if (collections.isUndefined(index)) {
                index = this.nElements;
            }
            if (index < 0 || index > this.nElements || collections.isUndefined(item)) {
                return false;
            }
            var newNode = this.createNode(item);
            if (this.nElements === 0) {
                this.firstNode = newNode;
                this.lastNode = newNode;
            }
            else if (index === this.nElements) {
                this.lastNode.next = newNode;
                this.lastNode = newNode;
            }
            else if (index === 0) {
                newNode.next = this.firstNode;
                this.firstNode = newNode;
            }
            else {
                var prev = this.nodeAtIndex(index - 1);
                newNode.next = prev.next;
                prev.next = newNode;
            }
            this.nElements++;
            return true;
        };
        LinkedList.prototype.first = function () {
            if (this.firstNode !== null) {
                return this.firstNode.element;
            }
            return undefined;
        };
        LinkedList.prototype.last = function () {
            if (this.lastNode !== null) {
                return this.lastNode.element;
            }
            return undefined;
        };
        LinkedList.prototype.elementAtIndex = function (index) {
            var node = this.nodeAtIndex(index);
            if (node === null) {
                return undefined;
            }
            return node.element;
        };
        LinkedList.prototype.indexOf = function (item, equalsFunction) {
            var equalsF = equalsFunction || collections.defaultEquals;
            if (collections.isUndefined(item)) {
                return -1;
            }
            var currentNode = this.firstNode;
            var index = 0;
            while (currentNode !== null) {
                if (equalsF(currentNode.element, item)) {
                    return index;
                }
                index++;
                currentNode = currentNode.next;
            }
            return -1;
        };
        LinkedList.prototype.contains = function (item, equalsFunction) {
            return (this.indexOf(item, equalsFunction) >= 0);
        };
        LinkedList.prototype.remove = function (item, equalsFunction) {
            var equalsF = equalsFunction || collections.defaultEquals;
            if (this.nElements < 1 || collections.isUndefined(item)) {
                return false;
            }
            var previous = null;
            var currentNode = this.firstNode;
            while (currentNode !== null) {
                if (equalsF(currentNode.element, item)) {
                    if (currentNode === this.firstNode) {
                        this.firstNode = this.firstNode.next;
                        if (currentNode === this.lastNode) {
                            this.lastNode = null;
                        }
                    }
                    else if (currentNode === this.lastNode) {
                        this.lastNode = previous;
                        previous.next = currentNode.next;
                        currentNode.next = null;
                    }
                    else {
                        previous.next = currentNode.next;
                        currentNode.next = null;
                    }
                    this.nElements--;
                    return true;
                }
                previous = currentNode;
                currentNode = currentNode.next;
            }
            return false;
        };
        LinkedList.prototype.clear = function () {
            this.firstNode = null;
            this.lastNode = null;
            this.nElements = 0;
        };
        LinkedList.prototype.equals = function (other, equalsFunction) {
            var eqF = equalsFunction || collections.defaultEquals;
            if (!(other instanceof collections.LinkedList)) {
                return false;
            }
            if (this.size() !== other.size()) {
                return false;
            }
            return this.equalsAux(this.firstNode, other.firstNode, eqF);
        };
        LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
            while (n1 !== null) {
                if (!eqF(n1.element, n2.element)) {
                    return false;
                }
                n1 = n1.next;
                n2 = n2.next;
            }
            return true;
        };
        LinkedList.prototype.removeElementAtIndex = function (index) {
            if (index < 0 || index >= this.nElements) {
                return undefined;
            }
            var element;
            if (this.nElements === 1) {
                element = this.firstNode.element;
                this.firstNode = null;
                this.lastNode = null;
            }
            else {
                var previous = this.nodeAtIndex(index - 1);
                if (previous === null) {
                    element = this.firstNode.element;
                    this.firstNode = this.firstNode.next;
                }
                else if (previous.next === this.lastNode) {
                    element = this.lastNode.element;
                    this.lastNode = previous;
                }
                if (previous !== null) {
                    element = previous.next.element;
                    previous.next = previous.next.next;
                }
            }
            this.nElements--;
            return element;
        };
        LinkedList.prototype.forEach = function (callback) {
            var currentNode = this.firstNode;
            while (currentNode !== null) {
                if (callback(currentNode.element) === false) {
                    break;
                }
                currentNode = currentNode.next;
            }
        };
        LinkedList.prototype.reverse = function () {
            var previous = null;
            var current = this.firstNode;
            var temp = null;
            while (current !== null) {
                temp = current.next;
                current.next = previous;
                previous = current;
                current = temp;
            }
            temp = this.firstNode;
            this.firstNode = this.lastNode;
            this.lastNode = temp;
        };
        LinkedList.prototype.toArray = function () {
            var array = [];
            var currentNode = this.firstNode;
            while (currentNode !== null) {
                array.push(currentNode.element);
                currentNode = currentNode.next;
            }
            return array;
        };
        LinkedList.prototype.size = function () {
            return this.nElements;
        };
        LinkedList.prototype.isEmpty = function () {
            return this.nElements <= 0;
        };
        LinkedList.prototype.toString = function () {
            return collections.arrays.toString(this.toArray());
        };
        LinkedList.prototype.nodeAtIndex = function (index) {
            if (index < 0 || index >= this.nElements) {
                return null;
            }
            if (index === (this.nElements - 1)) {
                return this.lastNode;
            }
            var node = this.firstNode;
            for (var i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        };
        LinkedList.prototype.createNode = function (item) {
            return {
                element: item,
                next: null
            };
        };
        return LinkedList;
    })();
    collections.LinkedList = LinkedList;
    var Dictionary = (function () {
        function Dictionary(toStrFunction) {
            this.table = {};
            this.nElements = 0;
            this.toStr = toStrFunction || collections.defaultToString;
        }
        Dictionary.prototype.getValue = function (key) {
            var pair = this.table['$' + this.toStr(key)];
            if (collections.isUndefined(pair)) {
                return undefined;
            }
            return pair.value;
        };
        Dictionary.prototype.setValue = function (key, value) {
            if (collections.isUndefined(key) || collections.isUndefined(value)) {
                return undefined;
            }
            var ret;
            var k = '$' + this.toStr(key);
            var previousElement = this.table[k];
            if (collections.isUndefined(previousElement)) {
                this.nElements++;
                ret = undefined;
            }
            else {
                ret = previousElement.value;
            }
            this.table[k] = {
                key: key,
                value: value
            };
            return ret;
        };
        Dictionary.prototype.remove = function (key) {
            var k = '$' + this.toStr(key);
            var previousElement = this.table[k];
            if (!collections.isUndefined(previousElement)) {
                delete this.table[k];
                this.nElements--;
                return previousElement.value;
            }
            return undefined;
        };
        Dictionary.prototype.keys = function () {
            var array = [];
            for (var name in this.table) {
                if (has(this.table, name)) {
                    var pair = this.table[name];
                    array.push(pair.key);
                }
            }
            return array;
        };
        Dictionary.prototype.values = function () {
            var array = [];
            for (var name in this.table) {
                if (has(this.table, name)) {
                    var pair = this.table[name];
                    array.push(pair.value);
                }
            }
            return array;
        };
        Dictionary.prototype.forEach = function (callback) {
            for (var name in this.table) {
                if (has(this.table, name)) {
                    var pair = this.table[name];
                    var ret = callback(pair.key, pair.value);
                    if (ret === false) {
                        return;
                    }
                }
            }
        };
        Dictionary.prototype.containsKey = function (key) {
            return !collections.isUndefined(this.getValue(key));
        };
        Dictionary.prototype.clear = function () {
            this.table = {};
            this.nElements = 0;
        };
        Dictionary.prototype.size = function () {
            return this.nElements;
        };
        Dictionary.prototype.isEmpty = function () {
            return this.nElements <= 0;
        };
        Dictionary.prototype.toString = function () {
            var toret = "{";
            this.forEach(function (k, v) {
                toret = toret + "\n\t" + k.toString() + " : " + v.toString();
            });
            return toret + "\n}";
        };
        return Dictionary;
    })();
    collections.Dictionary = Dictionary;
    var LinkedDictionaryPair = (function () {
        function LinkedDictionaryPair(key, value) {
            this.key = key;
            this.value = value;
        }
        LinkedDictionaryPair.prototype.unlink = function () {
            this.prev.next = this.next;
            this.next.prev = this.prev;
        };
        return LinkedDictionaryPair;
    })();
    var LinkedDictionary = (function (_super) {
        __extends(LinkedDictionary, _super);
        function LinkedDictionary(toStrFunction) {
            _super.call(this, toStrFunction);
            this.head = new LinkedDictionaryPair(null, null);
            this.tail = new LinkedDictionaryPair(null, null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        LinkedDictionary.prototype.appendToTail = function (entry) {
            var lastNode = this.tail.prev;
            lastNode.next = entry;
            entry.prev = lastNode;
            entry.next = this.tail;
            this.tail.prev = entry;
        };
        LinkedDictionary.prototype.getLinkedDictionaryPair = function (key) {
            if (collections.isUndefined(key)) {
                return undefined;
            }
            var k = '$' + this.toStr(key);
            var pair = (this.table[k]);
            return pair;
        };
        LinkedDictionary.prototype.getValue = function (key) {
            var pair = this.getLinkedDictionaryPair(key);
            if (!collections.isUndefined(pair)) {
                return pair.value;
            }
            return undefined;
        };
        LinkedDictionary.prototype.remove = function (key) {
            var pair = this.getLinkedDictionaryPair(key);
            if (!collections.isUndefined(pair)) {
                _super.prototype.remove.call(this, key);
                pair.unlink();
                return pair.value;
            }
            return undefined;
        };
        LinkedDictionary.prototype.clear = function () {
            _super.prototype.clear.call(this);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        };
        LinkedDictionary.prototype.replace = function (oldPair, newPair) {
            var k = '$' + this.toStr(newPair.key);
            newPair.next = oldPair.next;
            newPair.prev = oldPair.prev;
            this.remove(oldPair.key);
            newPair.prev.next = newPair;
            newPair.next.prev = newPair;
            this.table[k] = newPair;
            ++this.nElements;
        };
        LinkedDictionary.prototype.setValue = function (key, value) {
            if (collections.isUndefined(key) || collections.isUndefined(value)) {
                return undefined;
            }
            var existingPair = this.getLinkedDictionaryPair(key);
            var newPair = new LinkedDictionaryPair(key, value);
            var k = '$' + this.toStr(key);
            if (!collections.isUndefined(existingPair)) {
                this.replace(existingPair, newPair);
                return existingPair.value;
            }
            else {
                this.appendToTail(newPair);
                this.table[k] = newPair;
                ++this.nElements;
                return undefined;
            }
        };
        LinkedDictionary.prototype.keys = function () {
            var array = [];
            this.forEach(function (key, value) {
                array.push(key);
            });
            return array;
        };
        LinkedDictionary.prototype.values = function () {
            var array = [];
            this.forEach(function (key, value) {
                array.push(value);
            });
            return array;
        };
        LinkedDictionary.prototype.forEach = function (callback) {
            var crawlNode = this.head.next;
            while (crawlNode.next != null) {
                var ret = callback(crawlNode.key, crawlNode.value);
                if (ret === false) {
                    return;
                }
                crawlNode = crawlNode.next;
            }
        };
        return LinkedDictionary;
    })(Dictionary);
    collections.LinkedDictionary = LinkedDictionary;
    var MultiDictionary = (function () {
        function MultiDictionary(toStrFunction, valuesEqualsFunction, allowDuplicateValues) {
            if (allowDuplicateValues === void 0) { allowDuplicateValues = false; }
            this.dict = new Dictionary(toStrFunction);
            this.equalsF = valuesEqualsFunction || collections.defaultEquals;
            this.allowDuplicate = allowDuplicateValues;
        }
        MultiDictionary.prototype.getValue = function (key) {
            var values = this.dict.getValue(key);
            if (collections.isUndefined(values)) {
                return [];
            }
            return collections.arrays.copy(values);
        };
        MultiDictionary.prototype.setValue = function (key, value) {
            if (collections.isUndefined(key) || collections.isUndefined(value)) {
                return false;
            }
            if (!this.containsKey(key)) {
                this.dict.setValue(key, [value]);
                return true;
            }
            var array = this.dict.getValue(key);
            if (!this.allowDuplicate) {
                if (collections.arrays.contains(array, value, this.equalsF)) {
                    return false;
                }
            }
            array.push(value);
            return true;
        };
        MultiDictionary.prototype.remove = function (key, value) {
            if (collections.isUndefined(value)) {
                var v = this.dict.remove(key);
                return !collections.isUndefined(v);
            }
            var array = this.dict.getValue(key);
            if (collections.arrays.remove(array, value, this.equalsF)) {
                if (array.length === 0) {
                    this.dict.remove(key);
                }
                return true;
            }
            return false;
        };
        MultiDictionary.prototype.keys = function () {
            return this.dict.keys();
        };
        MultiDictionary.prototype.values = function () {
            var values = this.dict.values();
            var array = [];
            for (var i = 0; i < values.length; i++) {
                var v = values[i];
                for (var j = 0; j < v.length; j++) {
                    array.push(v[j]);
                }
            }
            return array;
        };
        MultiDictionary.prototype.containsKey = function (key) {
            return this.dict.containsKey(key);
        };
        MultiDictionary.prototype.clear = function () {
            this.dict.clear();
        };
        MultiDictionary.prototype.size = function () {
            return this.dict.size();
        };
        MultiDictionary.prototype.isEmpty = function () {
            return this.dict.isEmpty();
        };
        return MultiDictionary;
    })();
    collections.MultiDictionary = MultiDictionary;
    var Heap = (function () {
        function Heap(compareFunction) {
            this.data = [];
            this.compare = compareFunction || collections.defaultCompare;
        }
        Heap.prototype.leftChildIndex = function (nodeIndex) {
            return (2 * nodeIndex) + 1;
        };
        Heap.prototype.rightChildIndex = function (nodeIndex) {
            return (2 * nodeIndex) + 2;
        };
        Heap.prototype.parentIndex = function (nodeIndex) {
            return Math.floor((nodeIndex - 1) / 2);
        };
        Heap.prototype.minIndex = function (leftChild, rightChild) {
            if (rightChild >= this.data.length) {
                if (leftChild >= this.data.length) {
                    return -1;
                }
                else {
                    return leftChild;
                }
            }
            else {
                if (this.compare(this.data[leftChild], this.data[rightChild]) <= 0) {
                    return leftChild;
                }
                else {
                    return rightChild;
                }
            }
        };
        Heap.prototype.siftUp = function (index) {
            var parent = this.parentIndex(index);
            while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
                collections.arrays.swap(this.data, parent, index);
                index = parent;
                parent = this.parentIndex(index);
            }
        };
        Heap.prototype.siftDown = function (nodeIndex) {
            var min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
            while (min >= 0 && this.compare(this.data[nodeIndex], this.data[min]) > 0) {
                collections.arrays.swap(this.data, min, nodeIndex);
                nodeIndex = min;
                min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
            }
        };
        Heap.prototype.peek = function () {
            if (this.data.length > 0) {
                return this.data[0];
            }
            else {
                return undefined;
            }
        };
        Heap.prototype.add = function (element) {
            if (collections.isUndefined(element)) {
                return undefined;
            }
            this.data.push(element);
            this.siftUp(this.data.length - 1);
            return true;
        };
        Heap.prototype.removeRoot = function () {
            if (this.data.length > 0) {
                var obj = this.data[0];
                this.data[0] = this.data[this.data.length - 1];
                this.data.splice(this.data.length - 1, 1);
                if (this.data.length > 0) {
                    this.siftDown(0);
                }
                return obj;
            }
            return undefined;
        };
        Heap.prototype.contains = function (element) {
            var equF = collections.compareToEquals(this.compare);
            return collections.arrays.contains(this.data, element, equF);
        };
        Heap.prototype.size = function () {
            return this.data.length;
        };
        Heap.prototype.isEmpty = function () {
            return this.data.length <= 0;
        };
        Heap.prototype.clear = function () {
            this.data.length = 0;
        };
        Heap.prototype.forEach = function (callback) {
            collections.arrays.forEach(this.data, callback);
        };
        return Heap;
    })();
    collections.Heap = Heap;
    var Stack = (function () {
        function Stack() {
            this.list = new LinkedList();
        }
        Stack.prototype.push = function (elem) {
            return this.list.add(elem, 0);
        };
        Stack.prototype.add = function (elem) {
            return this.list.add(elem, 0);
        };
        Stack.prototype.pop = function () {
            return this.list.removeElementAtIndex(0);
        };
        Stack.prototype.peek = function () {
            return this.list.first();
        };
        Stack.prototype.size = function () {
            return this.list.size();
        };
        Stack.prototype.contains = function (elem, equalsFunction) {
            return this.list.contains(elem, equalsFunction);
        };
        Stack.prototype.isEmpty = function () {
            return this.list.isEmpty();
        };
        Stack.prototype.clear = function () {
            this.list.clear();
        };
        Stack.prototype.forEach = function (callback) {
            this.list.forEach(callback);
        };
        return Stack;
    })();
    collections.Stack = Stack;
    var Queue = (function () {
        function Queue() {
            this.list = new LinkedList();
        }
        Queue.prototype.enqueue = function (elem) {
            return this.list.add(elem);
        };
        Queue.prototype.add = function (elem) {
            return this.list.add(elem);
        };
        Queue.prototype.dequeue = function () {
            if (this.list.size() !== 0) {
                var el = this.list.first();
                this.list.removeElementAtIndex(0);
                return el;
            }
            return undefined;
        };
        Queue.prototype.peek = function () {
            if (this.list.size() !== 0) {
                return this.list.first();
            }
            return undefined;
        };
        Queue.prototype.size = function () {
            return this.list.size();
        };
        Queue.prototype.contains = function (elem, equalsFunction) {
            return this.list.contains(elem, equalsFunction);
        };
        Queue.prototype.isEmpty = function () {
            return this.list.size() <= 0;
        };
        Queue.prototype.clear = function () {
            this.list.clear();
        };
        Queue.prototype.forEach = function (callback) {
            this.list.forEach(callback);
        };
        return Queue;
    })();
    collections.Queue = Queue;
    var PriorityQueue = (function () {
        function PriorityQueue(compareFunction) {
            this.heap = new Heap(collections.reverseCompareFunction(compareFunction));
        }
        PriorityQueue.prototype.enqueue = function (element) {
            return this.heap.add(element);
        };
        PriorityQueue.prototype.add = function (element) {
            return this.heap.add(element);
        };
        PriorityQueue.prototype.dequeue = function () {
            if (this.heap.size() !== 0) {
                var el = this.heap.peek();
                this.heap.removeRoot();
                return el;
            }
            return undefined;
        };
        PriorityQueue.prototype.peek = function () {
            return this.heap.peek();
        };
        PriorityQueue.prototype.contains = function (element) {
            return this.heap.contains(element);
        };
        PriorityQueue.prototype.isEmpty = function () {
            return this.heap.isEmpty();
        };
        PriorityQueue.prototype.size = function () {
            return this.heap.size();
        };
        PriorityQueue.prototype.clear = function () {
            this.heap.clear();
        };
        PriorityQueue.prototype.forEach = function (callback) {
            this.heap.forEach(callback);
        };
        return PriorityQueue;
    })();
    collections.PriorityQueue = PriorityQueue;
    var Set = (function () {
        function Set(toStringFunction) {
            this.dictionary = new Dictionary(toStringFunction);
        }
        Set.prototype.contains = function (element) {
            return this.dictionary.containsKey(element);
        };
        Set.prototype.add = function (element) {
            if (this.contains(element) || collections.isUndefined(element)) {
                return false;
            }
            else {
                this.dictionary.setValue(element, element);
                return true;
            }
        };
        Set.prototype.intersection = function (otherSet) {
            var set = this;
            this.forEach(function (element) {
                if (!otherSet.contains(element)) {
                    set.remove(element);
                }
                return true;
            });
        };
        Set.prototype.union = function (otherSet) {
            var set = this;
            otherSet.forEach(function (element) {
                set.add(element);
                return true;
            });
        };
        Set.prototype.difference = function (otherSet) {
            var set = this;
            otherSet.forEach(function (element) {
                set.remove(element);
                return true;
            });
        };
        Set.prototype.isSubsetOf = function (otherSet) {
            if (this.size() > otherSet.size()) {
                return false;
            }
            var isSub = true;
            this.forEach(function (element) {
                if (!otherSet.contains(element)) {
                    isSub = false;
                    return false;
                }
                return true;
            });
            return isSub;
        };
        Set.prototype.remove = function (element) {
            if (!this.contains(element)) {
                return false;
            }
            else {
                this.dictionary.remove(element);
                return true;
            }
        };
        Set.prototype.forEach = function (callback) {
            this.dictionary.forEach(function (k, v) {
                return callback(v);
            });
        };
        Set.prototype.toArray = function () {
            return this.dictionary.values();
        };
        Set.prototype.isEmpty = function () {
            return this.dictionary.isEmpty();
        };
        Set.prototype.size = function () {
            return this.dictionary.size();
        };
        Set.prototype.clear = function () {
            this.dictionary.clear();
        };
        Set.prototype.toString = function () {
            return collections.arrays.toString(this.toArray());
        };
        return Set;
    })();
    collections.Set = Set;
    var Bag = (function () {
        function Bag(toStrFunction) {
            this.toStrF = toStrFunction || collections.defaultToString;
            this.dictionary = new Dictionary(this.toStrF);
            this.nElements = 0;
        }
        Bag.prototype.add = function (element, nCopies) {
            if (nCopies === void 0) { nCopies = 1; }
            if (collections.isUndefined(element) || nCopies <= 0) {
                return false;
            }
            if (!this.contains(element)) {
                var node = {
                    value: element,
                    copies: nCopies
                };
                this.dictionary.setValue(element, node);
            }
            else {
                this.dictionary.getValue(element).copies += nCopies;
            }
            this.nElements += nCopies;
            return true;
        };
        Bag.prototype.count = function (element) {
            if (!this.contains(element)) {
                return 0;
            }
            else {
                return this.dictionary.getValue(element).copies;
            }
        };
        Bag.prototype.contains = function (element) {
            return this.dictionary.containsKey(element);
        };
        Bag.prototype.remove = function (element, nCopies) {
            if (nCopies === void 0) { nCopies = 1; }
            if (collections.isUndefined(element) || nCopies <= 0) {
                return false;
            }
            if (!this.contains(element)) {
                return false;
            }
            else {
                var node = this.dictionary.getValue(element);
                if (nCopies > node.copies) {
                    this.nElements -= node.copies;
                }
                else {
                    this.nElements -= nCopies;
                }
                node.copies -= nCopies;
                if (node.copies <= 0) {
                    this.dictionary.remove(element);
                }
                return true;
            }
        };
        Bag.prototype.toArray = function () {
            var a = [];
            var values = this.dictionary.values();
            var vl = values.length;
            for (var i = 0; i < vl; i++) {
                var node = values[i];
                var element = node.value;
                var copies = node.copies;
                for (var j = 0; j < copies; j++) {
                    a.push(element);
                }
            }
            return a;
        };
        Bag.prototype.toSet = function () {
            var toret = new Set(this.toStrF);
            var elements = this.dictionary.values();
            var l = elements.length;
            for (var i = 0; i < l; i++) {
                var value = elements[i].value;
                toret.add(value);
            }
            return toret;
        };
        Bag.prototype.forEach = function (callback) {
            this.dictionary.forEach(function (k, v) {
                var value = v.value;
                var copies = v.copies;
                for (var i = 0; i < copies; i++) {
                    if (callback(value) === false) {
                        return false;
                    }
                }
                return true;
            });
        };
        Bag.prototype.size = function () {
            return this.nElements;
        };
        Bag.prototype.isEmpty = function () {
            return this.nElements === 0;
        };
        Bag.prototype.clear = function () {
            this.nElements = 0;
            this.dictionary.clear();
        };
        return Bag;
    })();
    collections.Bag = Bag;
    var BSTree = (function () {
        function BSTree(compareFunction) {
            this.root = null;
            this.compare = compareFunction || collections.defaultCompare;
            this.nElements = 0;
        }
        BSTree.prototype.add = function (element) {
            if (collections.isUndefined(element)) {
                return false;
            }
            if (this.insertNode(this.createNode(element)) !== null) {
                this.nElements++;
                return true;
            }
            return false;
        };
        BSTree.prototype.clear = function () {
            this.root = null;
            this.nElements = 0;
        };
        BSTree.prototype.isEmpty = function () {
            return this.nElements === 0;
        };
        BSTree.prototype.size = function () {
            return this.nElements;
        };
        BSTree.prototype.contains = function (element) {
            if (collections.isUndefined(element)) {
                return false;
            }
            return this.searchNode(this.root, element) !== null;
        };
        BSTree.prototype.remove = function (element) {
            var node = this.searchNode(this.root, element);
            if (node === null) {
                return false;
            }
            this.removeNode(node);
            this.nElements--;
            return true;
        };
        BSTree.prototype.inorderTraversal = function (callback) {
            this.inorderTraversalAux(this.root, callback, {
                stop: false
            });
        };
        BSTree.prototype.preorderTraversal = function (callback) {
            this.preorderTraversalAux(this.root, callback, {
                stop: false
            });
        };
        BSTree.prototype.postorderTraversal = function (callback) {
            this.postorderTraversalAux(this.root, callback, {
                stop: false
            });
        };
        BSTree.prototype.levelTraversal = function (callback) {
            this.levelTraversalAux(this.root, callback);
        };
        BSTree.prototype.minimum = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            return this.minimumAux(this.root).element;
        };
        BSTree.prototype.maximum = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            return this.maximumAux(this.root).element;
        };
        BSTree.prototype.forEach = function (callback) {
            this.inorderTraversal(callback);
        };
        BSTree.prototype.toArray = function () {
            var array = [];
            this.inorderTraversal(function (element) {
                array.push(element);
                return true;
            });
            return array;
        };
        BSTree.prototype.height = function () {
            return this.heightAux(this.root);
        };
        BSTree.prototype.searchNode = function (node, element) {
            var cmp = null;
            while (node !== null && cmp !== 0) {
                cmp = this.compare(element, node.element);
                if (cmp < 0) {
                    node = node.leftCh;
                }
                else if (cmp > 0) {
                    node = node.rightCh;
                }
            }
            return node;
        };
        BSTree.prototype.transplant = function (n1, n2) {
            if (n1.parent === null) {
                this.root = n2;
            }
            else if (n1 === n1.parent.leftCh) {
                n1.parent.leftCh = n2;
            }
            else {
                n1.parent.rightCh = n2;
            }
            if (n2 !== null) {
                n2.parent = n1.parent;
            }
        };
        BSTree.prototype.removeNode = function (node) {
            if (node.leftCh === null) {
                this.transplant(node, node.rightCh);
            }
            else if (node.rightCh === null) {
                this.transplant(node, node.leftCh);
            }
            else {
                var y = this.minimumAux(node.rightCh);
                if (y.parent !== node) {
                    this.transplant(y, y.rightCh);
                    y.rightCh = node.rightCh;
                    y.rightCh.parent = y;
                }
                this.transplant(node, y);
                y.leftCh = node.leftCh;
                y.leftCh.parent = y;
            }
        };
        BSTree.prototype.inorderTraversalAux = function (node, callback, signal) {
            if (node === null || signal.stop) {
                return;
            }
            this.inorderTraversalAux(node.leftCh, callback, signal);
            if (signal.stop) {
                return;
            }
            signal.stop = callback(node.element) === false;
            if (signal.stop) {
                return;
            }
            this.inorderTraversalAux(node.rightCh, callback, signal);
        };
        BSTree.prototype.levelTraversalAux = function (node, callback) {
            var queue = new Queue();
            if (node !== null) {
                queue.enqueue(node);
            }
            while (!queue.isEmpty()) {
                node = queue.dequeue();
                if (callback(node.element) === false) {
                    return;
                }
                if (node.leftCh !== null) {
                    queue.enqueue(node.leftCh);
                }
                if (node.rightCh !== null) {
                    queue.enqueue(node.rightCh);
                }
            }
        };
        BSTree.prototype.preorderTraversalAux = function (node, callback, signal) {
            if (node === null || signal.stop) {
                return;
            }
            signal.stop = callback(node.element) === false;
            if (signal.stop) {
                return;
            }
            this.preorderTraversalAux(node.leftCh, callback, signal);
            if (signal.stop) {
                return;
            }
            this.preorderTraversalAux(node.rightCh, callback, signal);
        };
        BSTree.prototype.postorderTraversalAux = function (node, callback, signal) {
            if (node === null || signal.stop) {
                return;
            }
            this.postorderTraversalAux(node.leftCh, callback, signal);
            if (signal.stop) {
                return;
            }
            this.postorderTraversalAux(node.rightCh, callback, signal);
            if (signal.stop) {
                return;
            }
            signal.stop = callback(node.element) === false;
        };
        BSTree.prototype.minimumAux = function (node) {
            while (node.leftCh !== null) {
                node = node.leftCh;
            }
            return node;
        };
        BSTree.prototype.maximumAux = function (node) {
            while (node.rightCh !== null) {
                node = node.rightCh;
            }
            return node;
        };
        BSTree.prototype.heightAux = function (node) {
            if (node === null) {
                return -1;
            }
            return Math.max(this.heightAux(node.leftCh), this.heightAux(node.rightCh)) + 1;
        };
        BSTree.prototype.insertNode = function (node) {
            var parent = null;
            var position = this.root;
            var cmp = null;
            while (position !== null) {
                cmp = this.compare(node.element, position.element);
                if (cmp === 0) {
                    return null;
                }
                else if (cmp < 0) {
                    parent = position;
                    position = position.leftCh;
                }
                else {
                    parent = position;
                    position = position.rightCh;
                }
            }
            node.parent = parent;
            if (parent === null) {
                this.root = node;
            }
            else if (this.compare(node.element, parent.element) < 0) {
                parent.leftCh = node;
            }
            else {
                parent.rightCh = node;
            }
            return node;
        };
        BSTree.prototype.createNode = function (element) {
            return {
                element: element,
                leftCh: null,
                rightCh: null,
                parent: null
            };
        };
        return BSTree;
    })();
    collections.BSTree = BSTree;
})(collections || (collections = {}));
/*!
* EventEmitter v4.2.11 - git.io/ee
* Unlicense - http://unlicense.org/
* Oliver Caldwell - http://oli.me.uk/
* @preserve
*/
var Events;
(function (Events) {
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }
        return -1;
    }
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }
    var EventEmitter = (function () {
        function EventEmitter() {
            this._events = null;
            this._onceReturnValue = null;
            this.on = alias('addListener');
            this.once = alias('addOnceListener');
            this.off = alias('removeListener');
            this.removeAllListeners = alias('removeEvent');
            this.trigger = alias('emitEvent');
        }
        EventEmitter.prototype._getEvents = function () {
            return this._events || (this._events = {});
        };
        ;
        EventEmitter.prototype.getListeners = function (evt) {
            var events = this._getEvents();
            var response;
            var key;
            if (evt instanceof RegExp) {
                response = {};
                for (key in events) {
                    if (events.hasOwnProperty(key) && evt.test(key)) {
                        response[key] = events[key];
                    }
                }
            }
            else {
                response = events[evt] || (events[evt] = []);
            }
            return response;
        };
        EventEmitter.prototype.flattenListeners = function (listeners) {
            var flatListeners = [];
            var i;
            for (i = 0; i < listeners.length; i += 1) {
                flatListeners.push(listeners[i].listener);
            }
            return flatListeners;
        };
        EventEmitter.prototype.getListenersAsObject = function (evt) {
            var listeners = this.getListeners(evt);
            var response;
            if (listeners instanceof Array) {
                response = {};
                response[evt] = listeners;
            }
            return response || listeners;
        };
        EventEmitter.prototype.addListener = function (evt, listener) {
            var listeners = this.getListenersAsObject(evt);
            var listenerIsWrapped = typeof listener === 'object';
            var key;
            for (key in listeners) {
                if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                    listeners[key].push(listenerIsWrapped ? listener : {
                        listener: listener,
                        once: false
                    });
                }
            }
            return this;
        };
        EventEmitter.prototype.addOnceListener = function (evt, listener) {
            return this.addListener(evt, {
                listener: listener,
                once: true
            });
        };
        EventEmitter.prototype.defineEvent = function (evt) {
            this.getListeners(evt);
            return this;
        };
        EventEmitter.prototype.defineEvents = function (evts) {
            for (var i = 0; i < evts.length; i += 1) {
                this.defineEvent(evts[i]);
            }
            return this;
        };
        EventEmitter.prototype.removeListener = function (evt, listener) {
            var listeners = this.getListenersAsObject(evt);
            var index;
            var key;
            for (key in listeners) {
                if (listeners.hasOwnProperty(key)) {
                    index = indexOfListener(listeners[key], listener);
                    if (index !== -1) {
                        listeners[key].splice(index, 1);
                    }
                }
            }
            return this;
        };
        EventEmitter.prototype.addListeners = function (evt, listeners) {
            return this.manipulateListeners(false, evt, listeners);
        };
        EventEmitter.prototype.removeListeners = function (evt, listeners) {
            return this.manipulateListeners(true, evt, listeners);
        };
        EventEmitter.prototype.manipulateListeners = function (remove, evt, listeners) {
            var i;
            var value;
            var single = remove ? this.removeListener : this.addListener;
            var multiple = remove ? this.removeListeners : this.addListeners;
            if (typeof evt === 'object' && !(evt instanceof RegExp)) {
                for (i in evt) {
                    if (evt.hasOwnProperty(i) && (value = evt[i])) {
                        if (typeof value === 'function') {
                            single.call(this, i, value);
                        }
                        else {
                            multiple.call(this, i, value);
                        }
                    }
                }
            }
            else {
                i = listeners.length;
                while (i--) {
                    single.call(this, evt, listeners[i]);
                }
            }
            return this;
        };
        EventEmitter.prototype.removeEvent = function (evt) {
            var type = typeof evt;
            var events = this._getEvents();
            var key;
            if (type === 'string') {
                delete events[evt];
            }
            else if (evt instanceof RegExp) {
                for (key in events) {
                    if (events.hasOwnProperty(key) && evt.test(key)) {
                        delete events[key];
                    }
                }
            }
            else {
                delete this._events;
            }
            return this;
        };
        EventEmitter.prototype.emitEvent = function (evt, args) {
            var listenersMap = this.getListenersAsObject(evt);
            var listeners;
            var listener;
            var i;
            var key;
            var response;
            for (key in listenersMap) {
                if (listenersMap.hasOwnProperty(key)) {
                    listeners = listenersMap[key].slice(0);
                    i = listeners.length;
                    while (i--) {
                        listener = listeners[i];
                        if (listener.once === true) {
                            this.removeListener(evt, listener.listener);
                        }
                        response = listener.listener.apply(this, args || []);
                        if (response === this._getOnceReturnValue()) {
                            this.removeListener(evt, listener.listener);
                        }
                    }
                }
            }
            return this;
        };
        EventEmitter.prototype.emit = function (evt) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(evt, args);
        };
        EventEmitter.prototype.setOnceReturnValue = function (value) {
            this._onceReturnValue = value;
            return this;
        };
        EventEmitter.prototype._getOnceReturnValue = function () {
            if (this.hasOwnProperty('_onceReturnValue')) {
                return this._onceReturnValue;
            }
            else {
                return true;
            }
        };
        return EventEmitter;
    })();
    Events.EventEmitter = EventEmitter;
})(Events || (Events = {}));
//interface Object {
//	GetName(): string;
//}
function GetTypename(obj) {
    var text = Object.prototype.toString.call(obj);
    text = text.slice(8, -1);
    if (text === "DOMWindow")
        return "Undefined";
    return text;
}
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        }
        else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
var t1;
(function (t1) {
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    t1.applyMixins = applyMixins;
})(t1 || (t1 = {}));
var LiteEvent = (function () {
    function LiteEvent() {
        this._handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this._handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this._handlers = this._handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this._handlers.slice(0).forEach(function (h) { return h(data); });
    };
    return LiteEvent;
})();
String.prototype.startsWith = function (str) {
    return this.substring(0, str.length) === str;
};
String.prototype.endsWith = function (str) {
    return this.substring(this.length - str.length, this.length) === str;
};
String.format = function (format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var useLocale = false;
    var result = '';
    for (var i = 0;;) {
        var open = format.indexOf('{', i);
        var close = format.indexOf('}', i);
        if ((open < 0) && (close < 0)) {
            result += format.slice(i);
            break;
        }
        if ((close > 0) && ((close < open) || (open < 0))) {
            if (format.charAt(close + 1) !== '}') {
                throw new Error('format stringFormatBraceMismatch');
            }
            result += format.slice(i, close + 1);
            i = close + 2;
            continue;
        }
        result += format.slice(i, open);
        i = open + 1;
        if (format.charAt(i) === '{') {
            result += '{';
            i++;
            continue;
        }
        if (close < 0)
            throw new Error('format stringFormatBraceMismatch');
        var brace = format.substring(i, close);
        var colonIndex = brace.indexOf(':');
        var argNumber = parseInt((colonIndex < 0) ? brace : brace.substring(0, colonIndex), 10);
        if (isNaN(argNumber))
            throw new Error('format stringFormatInvalid');
        var argFormat = (colonIndex < 0) ? '' : brace.substring(colonIndex + 1);
        var arg = args[argNumber];
        if (typeof (arg) === "undefined" || arg === null) {
            arg = '';
        }
        if (arg.toFormattedString) {
            result += arg.toFormattedString(argFormat);
        }
        else if (useLocale && arg.localeFormat) {
            result += arg.localeFormat(argFormat);
        }
        else if (arg.format) {
            result += arg.format(argFormat);
        }
        else {
            result += arg.toString();
        }
        i = close + 1;
    }
    return result;
};
String.isNullOrEmpty = function (str) {
    if (!str) {
        return true;
    }
    return false;
};
Date.prototype.ToDateTimeString = function () {
    var date = this;
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    return time;
};
var t1;
(function (t1) {
    var EnumEx = (function () {
        function EnumEx() {
        }
        EnumEx.getNames = function (e) {
            return Object.keys(e).filter(function (v) { return isNaN(parseInt(v, 10)); });
        };
        EnumEx.getName = function (e) {
            var names = EnumEx.getNames(e);
            return names[e];
        };
        EnumEx.getValues = function (e) {
            return Object.keys(e).map(function (v) { return parseInt(v, 10); }).filter(function (v) { return !isNaN(v); });
        };
        EnumEx.getNamesAndValues = function (e) {
            return EnumEx.getValues(e).map(function (v) {
                return {
                    name: e[v],
                    value: v
                };
            });
        };
        return EnumEx;
    })();
    t1.EnumEx = EnumEx;
})(t1 || (t1 = {}));
var t1;
(function (t1) {
    var Logger = (function () {
        function Logger() {
        }
        Logger.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var msg = String.format.apply(this, args);
            console.log(msg);
        };
        return Logger;
    })();
    t1.Logger = Logger;
})(t1 || (t1 = {}));
var t1;
(function (t1) {
    var IocContainer = (function () {
        function IocContainer() {
            this._registeredObjects = new Array();
            this.FunctionArguments = /^function\s*[^\(]*\(\s*([^\)]*)\)/m.source;
        }
        IocContainer.prototype.Register = function (name, type) {
            this._registeredObjects.push(new RegisteredObject(name, type));
        };
        IocContainer.prototype.IsRegistered = function (name) {
            for (var i = 0; i < this._registeredObjects.length; i++) {
                if (this._registeredObjects[i].Name === name) {
                    return true;
                }
            }
            return false;
        };
        IocContainer.prototype.Resolve = function (name) {
            debugger;
            if (this.IsRegistered(name)) {
                var requestedObject = this.GetRegisteredObject(name);
                var parametersForObject = this.GetParameters(requestedObject);
                var createdDepenancies = this.CreateDependancies(parametersForObject);
                var tmp = {};
                requestedObject.Type.apply(tmp, createdDepenancies);
                return tmp;
            }
        };
        IocContainer.prototype.GetRegisteredObject = function (Name) {
            for (var i = 0; i < this._registeredObjects.length; i++) {
                if (this._registeredObjects[i].Name === Name) {
                    return this._registeredObjects[i];
                }
            }
            return new RegisteredObject("", {});
        };
        IocContainer.prototype.GetParameters = function (RegObject) {
            if (RegObject.Name === "") {
                return new Array();
            }
            var result = RegObject.Type.toString().match(this.FunctionArguments);
            if (result === null) {
                return new Array();
            }
            if (result[1] === "") {
                return new Array();
            }
            return new Array(result[1]);
        };
        IocContainer.prototype.ResolveParameters = function (List) {
            var registeredDependancies = new Array();
            for (var i = 0; i < List.length; i++) {
                if (this.IsRegistered(List[i])) {
                    registeredDependancies.push(List[i]);
                }
            }
            return registeredDependancies;
        };
        IocContainer.prototype.CreateDependancies = function (List) {
            var objects = new Array();
            for (var i = 0; i < List.length; i++) {
                objects.push(this.Resolve(List[i]));
            }
            return objects;
        };
        return IocContainer;
    })();
    t1.IocContainer = IocContainer;
    var RegisteredObject = (function () {
        function RegisteredObject(Name, Type) {
            this.Name = Name;
            this.Type = Type;
        }
        return RegisteredObject;
    })();
    t1.RegisteredObject = RegisteredObject;
})(t1 || (t1 = {}));
var t1;
(function (t1) {
    var WebRequestSettings = (function () {
        function WebRequestSettings() {
        }
        return WebRequestSettings;
    })();
    t1.WebRequestSettings = WebRequestSettings;
    var WebClient = (function () {
        function WebClient() {
        }
        WebClient.prototype.SendRequest = function (settings) {
            var ajaxSettings = {
                url: settings.url,
                type: settings.type,
                dataType: settings.dataType,
                cache: false,
                data: settings.data,
                error: function (err) {
                    if (settings.error != null) {
                        settings.error(err);
                    }
                },
                success: function (data, textStatus, jqXHR) {
                    if (settings.success != null) {
                        settings.success(data, textStatus, jqXHR);
                    }
                }
            };
            $.ajax(ajaxSettings);
        };
        WebClient.prototype.PostRequest = function (settings) {
            settings.type = "POST";
            this.SendRequest(settings);
        };
        return WebClient;
    })();
    t1.WebClient = WebClient;
})(t1 || (t1 = {}));
/**
    Module P: Generic Promises for TypeScript

    Project, documentation, and license: https://github.com/pragmatrix/Promise
*/
var P;
(function (P) {
    function defer() {
        return new DeferredI();
    }
    P.defer = defer;
    function resolve(v) {
        return defer().resolve(v).promise();
    }
    P.resolve = resolve;
    function reject(err) {
        return defer().reject(err).promise();
    }
    P.reject = reject;
    function unfold(unspool, seed) {
        var d = defer();
        var elements = new Array();
        unfoldCore(elements, d, unspool, seed);
        return d.promise();
    }
    P.unfold = unfold;
    function unfoldCore(elements, deferred, unspool, seed) {
        var result = unspool(seed);
        if (!result) {
            deferred.resolve(elements);
            return;
        }
        while (result.next && result.promise.status == P.Status.Resolved) {
            elements.push(result.promise.result);
            result = unspool(result.next);
            if (!result) {
                deferred.resolve(elements);
                return;
            }
        }
        result.promise
            .done(function (v) {
            elements.push(v);
            if (!result.next)
                deferred.resolve(elements);
            else
                unfoldCore(elements, deferred, unspool, result.next);
        })
            .fail(function (e) {
            deferred.reject(e);
        });
    }
    (function (Status) {
        Status[Status["Unfulfilled"] = 0] = "Unfulfilled";
        Status[Status["Rejected"] = 1] = "Rejected";
        Status[Status["Resolved"] = 2] = "Resolved";
    })(P.Status || (P.Status = {}));
    var Status = P.Status;
    function when() {
        var promises = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            promises[_i - 0] = arguments[_i];
        }
        var allDone = defer();
        if (!promises.length) {
            allDone.resolve([]);
            return allDone.promise();
        }
        var resolved = 0;
        var results = [];
        promises.forEach(function (p, i) {
            p
                .done(function (v) {
                results[i] = v;
                ++resolved;
                if (resolved === promises.length && allDone.status !== Status.Rejected)
                    allDone.resolve(results);
            })
                .fail(function (e) {
                if (allDone.status !== Status.Rejected)
                    allDone.reject(new Error("when: one or more promises were rejected"));
            });
        });
        return allDone.promise();
    }
    P.when = when;
    var PromiseI = (function () {
        function PromiseI(deferred) {
            this.deferred = deferred;
        }
        Object.defineProperty(PromiseI.prototype, "status", {
            get: function () { return this.deferred.status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PromiseI.prototype, "result", {
            get: function () { return this.deferred.result; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PromiseI.prototype, "error", {
            get: function () { return this.deferred.error; },
            enumerable: true,
            configurable: true
        });
        PromiseI.prototype.done = function (f) {
            this.deferred.done(f);
            return this;
        };
        PromiseI.prototype.fail = function (f) {
            this.deferred.fail(f);
            return this;
        };
        PromiseI.prototype.always = function (f) {
            this.deferred.always(f);
            return this;
        };
        PromiseI.prototype.then = function (f) {
            return this.deferred.then(f);
        };
        return PromiseI;
    })();
    var DeferredI = (function () {
        function DeferredI() {
            this._resolved = function (_) { };
            this._rejected = function (_) { };
            this._status = Status.Unfulfilled;
            this._error = { message: "" };
            this._promise = new PromiseI(this);
        }
        DeferredI.prototype.promise = function () {
            return this._promise;
        };
        Object.defineProperty(DeferredI.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeferredI.prototype, "result", {
            get: function () {
                if (this._status != Status.Resolved)
                    throw new Error("Promise: result not available");
                return this._result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeferredI.prototype, "error", {
            get: function () {
                if (this._status != Status.Rejected)
                    throw new Error("Promise: rejection reason not available");
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        DeferredI.prototype.then = function (f) {
            var d = defer();
            this
                .done(function (v) {
                var promiseOrValue = f(v);
                if (promiseOrValue instanceof PromiseI) {
                    var p = promiseOrValue;
                    p.done(function (v2) { return d.resolve(v2); })
                        .fail(function (err) { return d.reject(err); });
                    return p;
                }
                d.resolve(promiseOrValue);
            })
                .fail(function (err) { return d.reject(err); });
            return d.promise();
        };
        DeferredI.prototype.done = function (f) {
            if (this.status === Status.Resolved) {
                f(this._result);
                return this;
            }
            if (this.status !== Status.Unfulfilled)
                return this;
            var prev = this._resolved;
            this._resolved = function (v) { prev(v); f(v); };
            return this;
        };
        DeferredI.prototype.fail = function (f) {
            if (this.status === Status.Rejected) {
                f(this._error);
                return this;
            }
            if (this.status !== Status.Unfulfilled)
                return this;
            var prev = this._rejected;
            this._rejected = function (e) { prev(e); f(e); };
            return this;
        };
        DeferredI.prototype.always = function (f) {
            this
                .done(function (v) { return f(v); })
                .fail(function (err) { return f(null, err); });
            return this;
        };
        DeferredI.prototype.resolve = function (result) {
            if (this._status !== Status.Unfulfilled)
                throw new Error("tried to resolve a fulfilled promise");
            this._result = result;
            this._status = Status.Resolved;
            this._resolved(result);
            this.detach();
            return this;
        };
        DeferredI.prototype.reject = function (err) {
            if (this._status !== Status.Unfulfilled)
                throw new Error("tried to reject a fulfilled promise");
            this._error = err;
            this._status = Status.Rejected;
            this._rejected(err);
            this.detach();
            return this;
        };
        DeferredI.prototype.detach = function () {
            this._resolved = function (_) { };
            this._rejected = function (_) { };
        };
        return DeferredI;
    })();
    function generator(g) {
        return function () { return iterator(g()); };
    }
    P.generator = generator;
    ;
    function iterator(f) {
        return new IteratorI(f);
    }
    P.iterator = iterator;
    var IteratorI = (function () {
        function IteratorI(f) {
            this.f = f;
            this.current = undefined;
        }
        IteratorI.prototype.advance = function () {
            var _this = this;
            var res = this.f();
            return res.then(function (value) {
                if (isUndefined(value))
                    return false;
                _this.current = value;
                return true;
            });
        };
        return IteratorI;
    })();
    function each(gen, f) {
        var d = defer();
        eachCore(d, gen(), f);
        return d.promise();
    }
    P.each = each;
    function eachCore(fin, it, f) {
        it.advance()
            .done(function (hasValue) {
            if (!hasValue) {
                fin.resolve({});
                return;
            }
            f(it.current);
            eachCore(fin, it, f);
        })
            .fail(function (err) { return fin.reject(err); });
    }
    function isUndefined(v) {
        return typeof v === 'undefined';
    }
    P.isUndefined = isUndefined;
})(P || (P = {}));
/// reference path="../typings/flux/flux.d.ts" />
//import Flux = require("flux");
//import t2 = require("t1");
//import { createAction, Action, PayloadCreator } from 'redux-actions';
//import { assign } from 'lodash';
var t1;
(function (t1) {
    var Reflux = RefluxCore;
    var FRefluxActions = (function () {
        function FRefluxActions(actionEnumType) {
            this.actionNames = t1.EnumEx.getNames(actionEnumType);
            var actionEnumTypeName = typeof actionEnumType;
            this._refluxActions = Reflux.createActions(this.actionNames);
            var self = this;
            for (var idx in this.actionNames) {
                var actionName = this.actionNames[idx];
                if (actionName.endsWith("_Async")) {
                    this._refluxActions[actionName] = Reflux.createAction({ children: ['completed', 'failed'] });
                }
                var action = this._refluxActions[actionName];
                action.listen(this._listenToAllActions(action).bind(self));
            }
        }
        FRefluxActions.prototype.listenToAllActions = function (action, args) {
        };
        FRefluxActions.prototype._listenToAllActions = function (action) {
            var self = this;
            return function (args) {
                self.listenToAllActions(action, args);
            };
        };
        FRefluxActions.prototype.getActionName = function (actionEnum) {
            var idx = actionEnum;
            var actionName = this.actionNames[idx];
            return actionName;
        };
        FRefluxActions.prototype.dispatchEvent = function (actionEnum) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var actionName = this.getActionName(actionEnum);
            var action = this._refluxActions[actionName];
            action.apply(this, args);
        };
        return FRefluxActions;
    })();
    t1.FRefluxActions = FRefluxActions;
    var FRefluxStoreActionArgs = (function () {
        function FRefluxStoreActionArgs() {
        }
        return FRefluxStoreActionArgs;
    })();
    t1.FRefluxStoreActionArgs = FRefluxStoreActionArgs;
    var FRefluxStore = (function () {
        function FRefluxStore(actions) {
            this._onAction = new LiteEvent();
            this._actions = actions;
            this.initialize();
            t1._FRefluxAppStore = this;
        }
        Object.defineProperty(FRefluxStore.prototype, "onAction", {
            get: function () { return this._onAction; },
            enumerable: true,
            configurable: true
        });
        FRefluxStore.prototype.trigger = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            this._refluxStore.trigger(args);
            var refluxStore = this._refluxStore;
            var actionName = "change";
            var emitArgs = args;
            if (args.length > 1) {
                actionName = args[0];
                var actionNameType = typeof actionName;
                if (actionNameType !== "string") {
                    actionName = this.getActionName(actionName);
                }
                emitArgs = [];
                for (var idx = 1; idx < args.length; idx++) {
                    emitArgs.push(args[idx]);
                }
            }
            (_a = refluxStore.emitter).emit.apply(_a, [actionName].concat(emitArgs));
            var _a;
        };
        FRefluxStore.prototype.initialize = function () {
            var actions = this._actions;
            for (var idx in actions) {
                var action = actions[idx];
                this.createListenToActions(action);
            }
            this.createRefluxStore(actions);
        };
        FRefluxStore.prototype.createListenToActions = function (actions) {
            var refluxActions = actions._refluxActions;
            var actionsNames = actions.actionNames;
            var self = this;
            for (var idx in actionsNames) {
                var actionName = actionsNames[idx];
                refluxActions[actionName].listen(this.listenToAllActions.bind(self, actionName));
            }
        };
        FRefluxStore.prototype.getAllRefluxActions = function (actions) {
            var allRefluxActions = [];
            for (var idx in actions) {
                var act = actions[idx];
                allRefluxActions.push(act._refluxActions);
            }
            return allRefluxActions;
        };
        FRefluxStore.prototype.createRefluxStore = function (actions) {
            var refluxActions = this.getAllRefluxActions(actions);
            var self = this;
            var storeArgs = {
                listenables: refluxActions,
                self: self,
                getInitialState: function () {
                    return self.getState();
                }
            };
            var refluxStore = Reflux.createStore(storeArgs);
            this._refluxStore = refluxStore;
        };
        FRefluxStore.prototype.listenToAllActions = function (actionName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var handlerName = "on" + actionName;
            var handler = this[handlerName];
            if (handler != null) {
                handler.apply(this, args);
            }
            var eventArgs = new FRefluxStoreActionArgs();
            eventArgs.actionName = actionName;
            eventArgs.args = args;
            this._onAction.trigger(eventArgs);
        };
        FRefluxStore.prototype.getActionName = function (action) {
            var allActions = this._actions;
            for (var idx in allActions) {
                var actions = allActions[idx];
                var actionName = actions.getActionName(action);
                return actionName;
            }
        };
        FRefluxStore.prototype.listen = function (actionName, callback) {
            if (typeof actionName !== "string") {
                actionName = this.getActionName(actionName);
            }
            var refluxStore = this._refluxStore;
            refluxStore.emitter.on(actionName, callback);
        };
        return FRefluxStore;
    })();
    t1.FRefluxStore = FRefluxStore;
    var FRefluxReducerComponent = (function (_super) {
        __extends(FRefluxReducerComponent, _super);
        function FRefluxReducerComponent() {
            _super.call(this);
            this._store = t1._FRefluxAppStore;
            this._store.onAction.on(this.handleAllActions.bind(this));
        }
        FRefluxReducerComponent.prototype.getState = function () {
            var store = this._store;
            var state = this.getStateFromStore(store.getState());
            return state;
        };
        FRefluxReducerComponent.prototype.componentDidMount = function () {
            this._isMounted = true;
            var fluxStore = this._store._refluxStore;
            fluxStore.emitter.addListener(fluxStore.eventLabel, this.handleStoreChanged.bind(this));
        };
        FRefluxReducerComponent.prototype.componentWillUnmount = function () {
            this._isMounted = false;
            var fluxStore = this._store._refluxStore;
            fluxStore.emitter.removeListener(this.handleStoreChanged);
            this._store.onAction.off(this.handleAllActions);
        };
        FRefluxReducerComponent.prototype.handleStoreChanged = function () {
            if (this._isMounted) {
                var state = this.getState();
                this.setState(state);
            }
        };
        FRefluxReducerComponent.prototype.handleAllActions = function (eventArgs) {
            var handlerName = "on" + eventArgs.actionName;
            var handler = this[handlerName];
            if (handler != null) {
                handler.apply(this, eventArgs.args);
            }
        };
        return FRefluxReducerComponent;
    })(React.Component);
    t1.FRefluxReducerComponent = FRefluxReducerComponent;
    var FRefluxStoreComponent = (function (_super) {
        __extends(FRefluxStoreComponent, _super);
        function FRefluxStoreComponent(store) {
            _super.call(this);
            this._store = store;
            this.state = this.getStateFromStore();
        }
        FRefluxStoreComponent.prototype.getStateFromStore = function () {
            var state = this._store.getState();
            return state;
        };
        FRefluxStoreComponent.prototype.componentDidMount = function () {
            this._isMounted = true;
            var fluxStore = this._store._refluxStore;
            fluxStore.emitter.addListener(fluxStore.eventLabel, this.handleStoreChanged.bind(this));
        };
        FRefluxStoreComponent.prototype.componentWillUnmount = function () {
            this._isMounted = false;
            var fluxStore = this._store._refluxStore;
            fluxStore.emitter.removeListener(this.handleStoreChanged);
        };
        FRefluxStoreComponent.prototype.handleStoreChanged = function () {
            if (this._isMounted) {
                var state = this.getStateFromStore();
                this.setState(state);
            }
        };
        FRefluxStoreComponent.prototype.preRender = function () {
            return (React.createElement("h2", null, "Loading..."));
        };
        FRefluxStoreComponent.prototype.lazyRender = function () {
            var component = this._lazyLoadedComponent;
            return component ? component : this.preRender();
        };
        FRefluxStoreComponent.prototype.lazyLoadComponent = function (moduleNames, getComponentTypeFromModuleCallback) {
            var self = this;
            setTimeout(function () {
                var requireOnce = t1.LazyRequire.once();
                requireOnce(moduleNames, function () {
                    var moduleFiles = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        moduleFiles[_i - 0] = arguments[_i];
                    }
                    var componentType = getComponentTypeFromModuleCallback.apply(null, moduleFiles);
                    self._lazyLoadedComponent = React.createElement(componentType, self.props);
                    self.forceUpdate();
                });
            }, 10);
        };
        return FRefluxStoreComponent;
    })(React.Component);
    t1.FRefluxStoreComponent = FRefluxStoreComponent;
    var FReflux = (function () {
        function FReflux() {
        }
        FReflux.connectToStore = function (Component, store, getStateFromStore) {
            var StoreConnection = React.createClass({
                getInitialState: function () {
                    return getStateFromStore(this.props);
                },
                componentDidMount: function () {
                    var fluxStore = store._refluxStore;
                    fluxStore.emitter.addListener(fluxStore.eventLabel, this.handleStoresChanged);
                },
                componentWillUnmount: function () {
                },
                handleStoresChanged: function () {
                    if (this.isMounted()) {
                        var state = getStateFromStore(this.props);
                        this.refs.component.setState(state);
                    }
                },
                render: function () {
                    return React.createElement(Component, React.__spread({}, this.props, {"ref": 'component'}));
                }
            });
            return StoreConnection;
        };
        return FReflux;
    })();
    t1.FReflux = FReflux;
})(t1 || (t1 = {}));
var t1;
(function (t1) {
    var states;
    (function (states) {
        states[states["unloaded"] = 0] = "unloaded";
        states[states["loading"] = 1] = "loading";
        states[states["loaded"] = 2] = "loaded";
    })(states || (states = {}));
    var LazyRequire = (function () {
        function LazyRequire() {
        }
        LazyRequire.once = function () {
            var state = states.unloaded;
            var requireOnce = function (dependencies, runCallback) {
                if (state === states.loaded) {
                    runCallback.apply(null, arguments);
                }
                else if (state === states.unloaded) {
                    state = states.loading;
                    require(dependencies, function () {
                        // Invoke the load callback with the loaded module definitions so that the calling code can use the module defitions to lazily initialize code.
                        //loadCallback.apply(null, arguments);
                        state = states.loaded;
                        runCallback.apply(null, arguments);
                    });
                }
                else {
                    return;
                }
            };
            return requireOnce;
        };
        return LazyRequire;
    })();
    t1.LazyRequire = LazyRequire;
})(t1 || (t1 = {}));
