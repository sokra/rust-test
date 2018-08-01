#![feature(use_extern_macros, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;


#[wasm_bindgen(module = "adder/src/lib.rs", version = "0.1.0")]
extern {
    fn add(a: i32, b: i32) -> i32;
}

#[wasm_bindgen]
pub fn nested_add(a: i32, b: i32) -> i32 {
    add(a, b)
}