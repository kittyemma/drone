
function init() {
    var tracker = initTracker("#example");
    tracking.track("#example .drone", tracker);
}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();

    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
    TrackerUtils.addTrackingColor("#5A9E57", "green", tracker);
    TrackerUtils.addTrackingColor("#4E9451", "green", tracker);
    TrackerUtils.addTrackingColor("#53A777", "green", tracker);
    TrackerUtils.addTrackingColor("#53AB6E", "green", tracker);
    TrackerUtils.addTrackingColor("#33753A", "green", tracker);
    TrackerUtils.addTrackingColor("#5AA457", "green", tracker);
    TrackerUtils.addTrackingColor("#387A32", "green", tracker);

    TrackerUtils.addTrackingColor("#B44D45", "red", tracker);
    TrackerUtils.addTrackingColor("#AA3813", "red", tracker);
    TrackerUtils.addTrackingColor("#B24F3F", "red", tracker);
    TrackerUtils.addTrackingColor("#A34543", "red", tracker);
    TrackerUtils.addTrackingColor("#A74E4E", "red", tracker);
    TrackerUtils.addTrackingColor("#A75049", "red", tracker);
    TrackerUtils.addTrackingColor("#A04242", "red", tracker);
    TrackerUtils.addTrackingColor("#A94A46", "red", tracker);


    TrackerUtils.startTrackingColors(tracker);

    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
        console.log(event.data);
        markColors(event.data, element);
    });

    return tracker;
}
function markColors(colors, element) {
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);
    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
        writeRectangle(colors[i], element + " .output");
    }
}

function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}

function writeRectangle(rect, element) {
    $(element)
        .append("<p>")
        .append(rect.color + ": " + rect.width + "X" + rect.height)
        .append(" @ " + rect.x + ":" + rect.y)
}


window.addEventListener("load", init);





