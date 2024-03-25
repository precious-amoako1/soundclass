function startClassification()
{
    navigator.medieDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uDyBBIlmE/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}