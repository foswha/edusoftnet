function ednTimeAgo(t){let a=new Date,e=new Date(t),n=e-a,r=Math.round(Math.abs(n)/864e5),o=e.getHours().toString().padStart(2,"0"),g=e.getMinutes().toString().padStart(2,"0"),s=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"][e.getDay()],u=e.getDate().toString().padStart(2,"0"),i=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][e.getMonth()];return(e.getFullYear().toString().substr(-2),n>0)?0===r?`Hoy a las ${o}:${g}`:1===r?`Ma\xf1ana ${s}, ${u} ${i}, ${o}:${g}`:`${s}, ${u} ${i}, ${o}:${g} (en ${r} d\xedas)`:0===n?"Ahora":r<=180?`${s}, ${u} ${i}, ${o}:${g} (hace ${Math.abs(r)} d\xeda${1===Math.abs(r)?"":"s"})`:`${s}, ${u} ${i}, ${o}:${g}`}