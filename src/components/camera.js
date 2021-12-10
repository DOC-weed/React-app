import React, { useEffect, useState } from "react";

export default function Camera({ save }) {
    const [width, setWidth] = useState(680);
    const [height, setHeight] = useState(480);

    const [context, setContext] = React.useState(null);
    const [videos, setVideo] = React.useState(null);

    const [tomarFoto, setTomarFoto] = React.useState(false);

    useEffect(() => {
        __startCamera();
    }, []);

    const __startCamera = () => {
        let video = null;
        let contexts = null;
        let canvas = null;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            video = document.getElementById('video');
            canvas = document.getElementById('canvas');
            contexts = canvas.getContext('2d');

            (function (video) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                });
            })(video)

        }
        setContext(contexts)
        setVideo(video)
    }

    const takeSnapshot = () => {
        context.drawImage(videos, 0, 0, width, height);
        setTomarFoto(true);

        let c = document.getElementById('canvas');
        let img = c.toDataURL("image/png");

        save(img)
    }


    return (
        <>
            {
                (!tomarFoto) ?
                    <>
                        <video id="video" width={width} height={height} autoplay={true} />
                        <canvas id="canvas" width={width} height={height} style={{ display: 'none' }} />
                        <button onClick={takeSnapshot}>Take picture</button>
                    </>
                    :
                    <>
                        <video id="video" width={width} height={height} autoplay={true} style={{ display: 'none' }} />
                        <canvas id="canvas" width={width} height={height} />
                    </>
            }

        </>
    )
}