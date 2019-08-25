'use strict'

const tf = require("@tensorflow/tfjs");

const execute = () => {
    const escalar = tf.scalar(1.5)
    const tensor1d = tf.tensor1d([1, 2, 3], 'int32')
    // shape [2,2] significa que tenho 2 demensoes com 2 elemantos cada.    
    // pode ser ecrito nos dois formato a baixo 
    // const tensor2d = tf.tensor2d([[4, 4], [7, 9]], [2, 2]) 
    const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2])
    // Shape [3, 1, 3] 3 dimensoes em cada dimensao tem 1 linha com 3 elementos
    const tensor3d = tf.tensor3d([[[1, 1, 1]], [[2, 2, 2]], [[3, 3, 3]]], [3, 1, 3], 'int32')
    const tensor4d = tf.tensor4d([[[[1], [2], [3], [4]]]], [1, 1, 4, 1], 'int32')

    console.log(`Escalar ${escalar.toString()}`)
    console.log(`Tensor 1D ${tensor1d.toString()}`)
    console.log(`Tensor 2D ${tensor2d.toString()}`)
    console.log(`Tensor 3D ${tensor3d.toString()}`)
    console.log(`Tensor 4D ${tensor4d.toString()}`)

    const response = {
        escalar: escalar.toString(),
        tensor1d: tensor1d.toString(),
        tensor2d: tensor2d.toString(),
        tensor3d: tensor3d.toString(),
        tensor4d: tensor4d.toString()
    }

    return response
}


exports.action = async (req, res, next) => {
    let result = await execute()
    res.send(result)
}

