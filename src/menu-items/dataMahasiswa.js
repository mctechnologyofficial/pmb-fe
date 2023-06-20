// assets
import { IconSchool } from '@tabler/icons';


// constant
const icons = {
  IconSchool
};

// ==============================|| DATA MAHASISWA MENU ITEMS ||============================== //

const DataMahasiswa = {
  id: 'dataMahasiswa',
  title: 'Data Calon Mahasiswa',
  // caption: 'Page Caption',
  type: 'group',
  children: [
    {
      id: 'reguler',
      title: 'Jalur Reguler',
      type: 'collapse',
      url: '/dashboard/reguler',
      icon: icons.IconSchool,
      children: [
        {
          id: 's1',
          title: 'S1',
          type: 'item',
          url: '/dashboard/reguler/s1',
          target: false
        },
        {
          id: 's2',
          title: 'S2',
          type: 'item',
          url: '/dashboard/reguler/s2',
          target: false
        }
      ]
    },
    {
      id: 'konversi',
      title: 'Jalur Konversi',
      type: 'item',
      url: '/dashboard/konversi',
      icon: icons.IconSchool,
    },
  ]
};

export default DataMahasiswa;
