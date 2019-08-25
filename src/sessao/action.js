'use strict'

import * as tf from '@tensorflow/tfjs';

exports.action = () => {
    const escalar = tf.scalar(1.5);

    return escalar;

}


