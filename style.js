const zdarzenia=() => {
    document.querySelector('.wys').addEventListener('change', event => { ustawWysokosc(document.querySelector('.wys').value); });
    document.querySelector('.pro').addEventListener('change', event => { ustawPromien(document.querySelector('.pro').value); });
}

const ustawWysokosc=value => {
    if (value == '') { document.querySelectorAll('.h').forEach(el => el.innerHTML='0'); }
    else { document.querySelectorAll('.h').forEach(el => el.innerHTML=value); }
    ustawWartosci();
    if (value == '') { document.querySelector('.figuraWys').innerHTML='H'; }
}

const ustawPromien=value => {
    if (value == '') { document.querySelectorAll('.r').forEach(el => el.innerHTML='0'); }
    else { document.querySelectorAll('.r').forEach(el => el.innerHTML=value); }
    document.querySelectorAll('.potęga').forEach(el => el.innerHTML=Math.pow(value, 2));
    ustawWartosci();
    if (value == '') { document.querySelector('.figuraPro').innerHTML='R'; }
}

const ustawWartosci=() => {
    const h=document.querySelector('.wys').value*1;
    const r=document.querySelector('.pro').value*1;
    if ((r != '')&&(h != '')) { document.querySelector('.wynik').innerHTML=3.14*r*r*h; }
    else { document.querySelector('.wynik').innerHTML='0'; }
}