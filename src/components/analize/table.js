
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'recette', headerName: 'Recette', width: 250 },
  { field: 'indice', headerName: 'Indice', type: 'number', width: 70 },
  { field: 'likes', headerName: 'Likes', type: 'number', width: 70},
  { field: 'dislikes', headerName: 'Dislikes', type: 'number', width: 70},
  { field: 'cta', headerName: 'CTA', type: 'number', width: 60 },
];

const rows = [
  { id: 1, recette: 'Chili Vege au petit épeautre du velay', indice: 88.6, likes: 328, dislikes: 38, cta: 49 },
  { id: 2, recette: 'Galettes de pommes de terre farcies au...', indice: 87.3, likes: 315, dislikes: 41, cta: 43 },
  { id: 3, recette: 'Flans d’amarante aux légumes', indice: 87.1, likes: 318, dislikes: 42, cta: 41 },
  { id: 4, recette: 'Petit Épeautre du Velay version « Mac &...', indice: 85.2, likes: 298, dislikes: 38, cta: 39 },
  { id: 5, recette: 'Riz noir aux légumes racines et aux poi...', indice: 83.6, likes: 275, dislikes: 39, cta: 39 },
  { id: 6, recette: 'Bouillon asiatique aux shiitakés', indice: 82.4, likes: 266, dislikes: 36, cta: 38 },
  { id: 7, recette: 'Grands-pères à la farine de Lentille vert...', indice: 81.9, likes: 254, dislikes: 38, cta: 38 },
  { id: 8, recette: 'Salade de fregola, pêche et mozzarella', indice: 80.5, likes: 243, dislikes: 39, cta: 37 },
  { id: 9, recette: 'Salade de Freekeh, betteraves et feta', indice: 79.6, likes: 246, dislikes: 38, cta: 34 },
  { id: 10, recette: 'Tomates farcies au Petit Épeautre du Ve...', indice: 78.6, likes: 237, dislikes: 34, cta: 33 },
  { id: 11, recette: 'Mini éclairs salés farcis à la crème de ...', indice: 76.7, likes: 233, dislikes: 35, cta: 32 },
  { id: 12, recette: 'Purée sucrée aux haricots azuki', indice: 75.3, likes: 224, dislikes: 36, cta: 30 },
  { id: 13, recette: 'Risotto aux morilles', indice: 73.4, likes: 227, dislikes: 37, cta: 28 },
  { id: 14, recette: 'Oeuf parfait, Lentille verte du Puy AOP a...', indice: 72.9, likes: 225, dislikes: 32, cta: 26 },
  { id: 15, recette: 'Pancakes aux flocons d’avoine', indice: 71.2, likes: 215, dislikes: 31, cta: 26 },
  { id: 16, recette: 'Creusotto aux cèpes', indice: 71.1, likes: 215, dislikes: 30, cta: 26 },
];

export default function DataTable() {
  return (
    <div  className='tableData'  >
         <div className="tableDataTitre">
         Performance recettes
         </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        // checkboxSelection
      />
    </div>
  );
}
