const gh='https://github.com/ppnpathirana/';
const projects=[
['Safe Bend Vision','COMPUTER VISION · ROAD SAFETY','SAFE-BEND-VISION-','A vehicle detection and driver warning prototype for blind road curves. Dual cameras and YOLOv8 on Raspberry Pi 5 connect vehicle detection with LED alerts and a live monitoring dashboard.',['Raspberry Pi 5','YOLOv8','Python','Flask · React']],
['DEM3T3R V1','AGRICULTURAL ROBOTICS · AUTOMATION','DEM3T3R-VI','An agricultural robotics platform bringing together crop disease detection, live video, ESP32 sensor monitoring, GPS tracking and rover controls through a web dashboard.',['ESP32','Computer vision','Sensors','Web dashboard']],
['CleanBot','ROBOTICS · SOLAR PANEL CLEANING','SOLAR-PANEL-CLEAN-ROBOT-BY-PI-5','A Raspberry Pi–based solar panel cleaning robot project with web monitoring and control. The project includes manual operation, automated cleaning, custom paths and session history.',['Raspberry Pi','Python','Automation','Web interface']],
['E-OSCI V1','ELECTRONICS · TEST & MEASUREMENT','E-OSCI-V1','A portable, low-cost ESP32 digital oscilloscope with a Wi-Fi web interface for viewing electrical waveforms. An exploration of electronic instrumentation and browser-based interaction.',['ESP32','C++','Wi-Fi','Instrumentation']],
['CropGuard','AGRICULTURAL ROBOTICS · CROP MONITORING','cropguard1','An agricultural robot project combining computer vision, crop health monitoring, environmental sensor data and manual or automated navigation through a Flask web dashboard.',['TensorFlow Lite','OpenCV','Flask','Sensor integration']]
];
projects.push(
 ['DIY 12V Power Supply','ELECTRONICS · POWER SUPPLY',null,'A hand-built 12V power supply prototype assembled on a prototyping board. The build photographs document the circuit assembly, component integration and multimeter output-voltage check.',['12V power supply','Circuit assembly','Soldering','Voltage measurement']],
 ['DIY 7-Segment Timer','ELECTRONICS · DIGITAL DISPLAY',null,'A hand-built timer project with a four-digit seven-segment display on a prototyping board. The photographs show the display wiring, resistor integration, assembly process and illuminated prototype.',['Seven-segment display','Timer','Circuit prototyping','Soldering']]
);
projects.push(
 ['ESP32 Dual-Antenna Wi-Fi Security / Network Tool','WIRELESS SYSTEMS · NETWORK TESTING',null,'A portable ESP32-based wireless testing device in a custom compact enclosure, developed for Wi-Fi protocol analysis and wireless network evaluation.',['ESP32','Dual external antennas','C/C++ · Arduino IDE','Python']],
 ['Autonomous Obstacle-Avoiding & Tele-Operated ESP32 RC Rover','ROBOTICS · AUTONOMOUS & REMOTE CONTROL',null,'A multi-sensor robotic rover built on a custom chassis, integrating ultrasonic environmental sensing and wireless connectivity for autonomous navigation and remote operation.',['ESP32 / Arduino','HC-SR04 ultrasonic sensors','DC gear motors · Motor drivers','C/C++']],
 ['Hand Gesture-Controlled Crane System','MECHANICAL SYSTEMS · GESTURE CONTROL',null,'A prototype crane combining a mechanical boom, pulley system and motorized actuation with hand-gesture control through four ultrasonic sensors.',['Microcontrollers','Four ultrasonic sensors','Servo/DC motors','Mechanical actuators · C/C++']]
);
const projectHighlights={
 7:['Low-level wireless packet handling and frame-injection routines using the ESP32 Wi-Fi driver architecture.','Custom dual-external-antenna arrangement developed for wireless signal coverage testing.','Local interface and backend scripts for test parameters and real-time status telemetry.'],
 8:['Multi-directional ultrasonic sensing for obstacle detection and collision avoidance.','Wireless transceiver integration for remote telemetry and command links.','Power distribution and motor driving stages supporting differential steering.'],
 9:['Distance-feedback control for lifting, lowering and rotational slewing.','Four-sensor hand-proximity mapping translated into directional motor commands.','Mechanical boom, pulley system and actuator mounts developed for prototype load handling.']
};
const projectPhotos=['safe-bend.jpg','demeter.jpg','cleanbot.jpg','e-osci.jpg','cropguard.jpg','power-supply.jpg','timer-updated.jpg','wifi-network-tool.jpg','rc-rover.jpg','gesture-crane.jpg'];
const photoDescriptions=['Safe Bend Vision roadside warning prototype with camera and signal enclosure','DEM3T3R V1 agricultural robot chassis and electronics development collage','CleanBot solar panel cleaning prototype with rotary brushes on a solar panel','E-OSCI V1 oscilloscope prototype displaying a waveform with physical controls','CropGuard mobile robot with camera and sensors during a demonstration','DIY 12V power supply circuit with a multimeter output-voltage check','DIY four-digit seven-segment timer circuit and illuminated display','ESP32 wireless network testing prototype with two external antennas and compact enclosure','Custom obstacle-avoiding RC rover with ultrasonic sensors and wireless modules','Hand gesture-controlled crane prototype, mechanical boom sketch and four-sensor control assembly'];
document.querySelector('#project-list').innerHTML=projects.map(([name,category,repo,desc,tags],i)=>`<article class="project"><a class="visual project-photo" href="assets/projects/${projectPhotos[i]}" target="_blank" rel="noopener noreferrer" aria-label="View full ${name} project photograph"><img src="assets/projects/${projectPhotos[i]}" alt="${photoDescriptions[i]}" loading="lazy" decoding="async"><span>PROJECT PHOTOGRAPH / ${String(i+1).padStart(2,'0')} · VIEW FULL IMAGE ↗</span></a><div><small>${String(i+1).padStart(2,'0')} / ${category} · INDEPENDENT PROJECT</small><h3>${name}</h3><p>${desc}</p>${projectHighlights[i] ? `<ul class="project-highlights">${projectHighlights[i].map(item=>`<li>${item}</li>`).join('' )}</ul>` : ''}<div class="tags">${tags.map(t=>`<span>${t}</span>`).join('')}</div><a class="text-link" href="${repo ? gh+repo : 'assets/projects/'+projectPhotos[i]}" target="_blank" rel="noopener noreferrer">${repo ? 'View project on GitHub' : 'View build photographs'} ↗</a></div></article>`).join('');
const certs=[
['AI/ML Engineer — Stages 1, 2 & 3','SLIIT · Centre for Open and Distance Education · 2026',[['Stage 1','ml-stage-1.pdf'],['Stage 2','ml-stage-2.pdf'],['Stage 3','ml-stage-3.pdf']]],
['Six Sigma White Belt','Certificate · 16 October 2026',[['View certificate','six-sigma.pdf']]],
['Fundamentals of Remote Sensing','NASA Applied Remote Sensing Training (ARSET) · 07 August 2026',[['View certificate','nasa-arset.pdf']]],
['Open Science 101','NASA · Certificate of Achievement · 20 August 2026',[['View certificate','nasa-open-science-101.pdf']]],
['Open Science Essentials','NASA · Certificate of Achievement · 18 August 2026',[['View certificate','nasa-open-science-essentials.pdf']]],
['MATLAB Onramp','Self-paced course completion · 01 August 2026',[['View certificate','matlab-onramp.pdf']]],
['Introduction to Robotics on AWS','AWS Training and Certification · 07 May 2026',[['View certificate','aws-robotics.pdf']]],
['Rapid Prototyping with the Curiosity Nano Platform','Technical course completion · 09 May 2026',[['View certificate','rapid-prototyping.pdf']]],
['Robotics and AI','Great Learning · Course completion · 07 May 2026',[['View certificate','robotics-and-ai.pdf']]],
['Robotic Process Automation','Great Learning · Course completion · 07 May 2026',[['View certificate','robotic-process-automation.pdf']]],
['Battery Charging Fundamentals','Technical course completion · 09 May 2026',[['View certificate','battery-charging.pdf']]]
];
document.querySelector('#certificate-list').innerHTML=certs.map(([title,issuer,files])=>`<article class="cert"><span class="cert-icon" aria-hidden="true">✧</span><div class="cert-info"><h3>${title}</h3><p>${issuer}</p></div><div class="cert-links">${files.map(([label,file])=>`<a href="assets/certificates/${file}" target="_blank" rel="noopener noreferrer" aria-label="${title} — ${label}">${label} ↗</a>`).join('')}</div></article>`).join('');
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close ×':'Menu ☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeMenu();menu.textContent='Menu ☰'}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.textContent='Menu ☰';menu.focus()}});
document.querySelector('#year').textContent=new Date().getFullYear();






