export const GalleryImagesData=[
    
]

import { ReactNode } from "react";
import Robot from "./components/visual/robot";
import Computer from "./components/visual/computer";
import Car3D from "./components/visual/car3d";
import Clean from "./components/visual/clean";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode; // Tipo ReactNode para representar un componente React
}

export const ServicesData: Service[] = [
  {
        title:"Prototipado Rápido",
        description:"Utilizamos impresoras 3D FDM, que consiste en la deposición de plástico fundido para crear las piezas. Este método es relativamente más rápido que otros sistemas.",
        icon:<Robot/>,
    },
    {
        title:"Impresión 3D Online",
        description:"Puedes enviarnos tu modelo 3D y nosotros nos encargamos de fabricarlo con nuestro equipo de impresión 3D. Desde prototipos hasta piezas personalizadas.",
        icon:<Computer/>,

    },
    {
        title:"Diseño 3D",
        description:"Nos encargamos de llevar tu idea a un modelo 3D. Una vez finalizado el diseño, utilizamos tecnología de vanguardia para imprimir tus creaciones con la más alta calidad.",
        icon:<Car3D/>,

    },
    {
        title:"Post-Procesado",
        description:"Siempre se realiza un trabajo de limpieza de la pieza luego de la impresión y cuando es necesario, también realizamos el trabajo de pintura de la misma.",
        icon:<Clean/>,

    }
]

export const MaterialsData  = [
    {
        title:"PLA",
        image:"rollo.png",
        characters:[
            {
                title:"Fácil de manipular"
            },
            {
                title:"Alta definición"
            },
            {
                title:"Costo bajo"
            },
            {
                title:"Rígido"
            },
            {
                title:"Menos resistente a fuerzas y temperatura."
            }
        ],
        perfectFor:[
            {
                title:"Decoración"
            },
            {
                title:"Controlar medidas"
            },
            {
                title:"Accesorios"
            },
            {
                title:"Prototipos"
            }
        ]
    },
    {
        title:"PET-G",
        image:"rollo2.png",
        characters:[
            {
                title:"Fácil de manipular"
            },
            {
                title:"Alta definición"
            },
            {
                title:"Costo Medio"
            },
            {
                title:"Rígido"
            },
            {
                title:"Resistente a fuerzas y temperatura"
            }
        ],
        perfectFor:[
            {
                title:"Prototipos funcionales"
            },
            {
                title:"Piezas de máquinas"
            },
            {
                title:"Accesorios"
            }
        ]
    },
    {
        title:"FLEX",
        image:"rollo3.png",
        characters:[
            {
                title:"Manipuleo medio"
            },
            {
                title:"Alta definición"
            },
            {
                title:"Costo Alto"
            },
            {
                title:"Flexible"
            },
            {
                title:"No resiste altas temperaturas"
            }
        ],
        perfectFor:[
            {
                title:"Piezas flexibles"
            },
            {
                title:"Piezas semi-flexibles"
            }
        ]
    },
    {
        title:"ABS",
        image:"rollo4.png",
        characters:[
            {
                title:"Dificil manipuleo"
            },
            {
                title:"Definicion media"
            },
            {
                title:"Costo medio-alto"
            },
            {
                title:"Rígido"
            },
            {
                title:"Resistente a fuerzas y temperatura"
            }
        ],
        perfectFor:[
            {
                title:"Piezas de máquinas"
            },
            {
                title:"Piezas resistentes"
            }
        ]
    }
]

export const FAQs = [
    {
        ask:"¿Cuánto tiempo lleva hacer un pedido?",
        answer:"El tiempo promedio para terminar un trabajo es de dos semanas luego de la primera comunicación, pero depende de la cantidad de encargos y de otros factores como la época de exámenes de la universidad."
    },
    {
        ask:"¿Cómo solicito una pieza determinada?",
        answer:"Puede comunicarse a través del formulario en esta página, mediante redes sociales, WhastApp o Telegram. Todos los datos se encuentran en esta página."
    },
    {
        ask:"¿Qué piezas se pueden hacer?",
        answer:"Debido al método de producción, se puede fabricar cualquier tipo de pieza en plástico. Dependerá del modelo y del costo."
    },
    {
        ask:"¿Puedo solicitar la impresión de un modelo ya tengo desde antes?",
        answer:"Por supuesto, si ya tiene un modelo 3d y desea imprimirlo, puede enviarlo al mail rafaeldona3d@gmail.com y le pasaremos un presupuesto."
    }
]

export const FeaturesGridData = [
    {
        icon:"material-symbols:work",
        title:"+4 Años",
        description:"Con una trayectoria de más de 4 años en el campo del diseño e impresión 3D, consolidado nuestra experiencia."
    },
    {
        icon:"lucide:merge",
        title:"Ultima tecnologia",
        description:"Trabajamos con impresoras 3D de última generación, garantizando así la más alta calidad en nuestros proyectos."
    },
    {
        icon:"material-symbols:dashboard-customize-outline-rounded",
        title:"Personalizado",
        description:"Nos especializamos en la adaptación precisa de modelos según las exigencias propias de nuestros clientes."
    },
    {
        icon:"ph:cube-bold",
        title:"Primera calidad",
        description:"Trabajamos con materiales premium de proveedores como PrintaLot y Grilon3, con 4 opciones disponibles para elegir."
    },
    {
        icon:"ic:sharp-color-lens",
        title:"30+ Colores ",
        description:"Contamos con una extensa gamas de colores, permitiendo una personalización unica en cada impresión."
    },
    {
        icon:"mdi:printer-3d-nozzle",
        title:"4 impresoras 3D",
        description:"Contamos con cuatro impresoras 3D de vanguardia para atender tus necesidades con eficacia."
    }
]