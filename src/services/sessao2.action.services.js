'use strict'

const tf = require("@tensorflow/tfjs-node");

const execute = () => {
    const escalar = tf.scalar(1.5)
    const tensor1d = tf.tensor1d([1.4, 2, 3], 'float32')
    // shape [2,2] significa que tenho 2 demensoes com 2 elemantos cada.    
    // pode ser ecrito nos dois formato a baixo 
    // const tensor2d = tf.tensor2d([[4, 4], [7, 9]], [2, 2]) 
    const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2])
    // Shape [3, 1, 3] 3 dimensoes em cada dimensao tem 1 linha com 3 elementos
    const tensor3d = tf.tensor3d([[[1, 1, 1]], [[2, 2, 2]], [[3, 3, 3]]], [3, 1, 3], 'int32')
    const tensor4d = tf.tensor4d([[[[1], [2], [3], [4]]]], [1, 1, 4, 1], 'int32')

    tensor1d.print()
    tensor2d.print()
    tensor3d.print()
    tensor4d.print()

    const response = {
        escalar: escalar.toString(),
        tensor1d: tensor1d.toString(),
        tensor2d: tensor2d.toString(),
        tensor3d: tensor3d.toString(),
        tensor4d: tensor4d.toString()
    }

    return response
}

const criaTensoresPadrao = () => {
    const tensor = tf.tensor([1, 2, 3, 4])
    tensor.print()

    return tensor.toString()
}


exports.action = async (req, res, next) => {
    const result = await criaTensoresPadrao();
    res.send(result)
}
