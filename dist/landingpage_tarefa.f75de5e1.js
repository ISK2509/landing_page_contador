AOS.init(); //codigo do site AOS
const dataDoEvento = new Date("Dec 25, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMilesegundos = 86400000; //1000 é a reresentacao de 1 segundo em milesegundos
    const horaEmMilesegundos = 3600000;
    const minutoEmMilesegundos = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMilesegundos);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMilesegundos / horaEmMilesegundos); //% é o resta da divisão
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMilesegundos / minutoEmMilesegundos);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMilesegundos / 1000);
    //console.log(diasAteOEvento); para quando for antes do evento. só religar os consoles log
    //console.log(horasAteOEvento);
    //console.log(minutosAteOEvento);
    //console.log(segundosAteOEvento);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; //string é entre crase
    //if de informação de quando o evento já passou
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }
}, 1000);

//# sourceMappingURL=landingpage_tarefa.f75de5e1.js.map
