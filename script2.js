if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        const compassHeading = event.webkitCompassHeading || Math.abs(event.alpha - 360);
        const qiblaDirection = 58; // Qibla direction from a specific location in degrees
        const rotation = qiblaDirection - compassHeading;
        
        const pointer = document.getElementById('pointer');
        pointer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    });
} else {
    document.getElementById('instruction').textContent = 'Your device does not support orientation events.';
}
