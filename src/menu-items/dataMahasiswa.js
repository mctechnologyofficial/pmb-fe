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
      url: '/calon-mahasiswa/reguler',
      icon: icons.IconSchool,
      children: [
        {
          id: 's1',
          title: 'S1',
          type: 'item',
          url: '/calon-mahasiswa/reguler/s1',
          target: false
        },
        {
          id: 's2',
          title: 'S2',
          type: 'item',
          url: '/calon-mahasiswa/reguler/s2',
          target: false
        }
      ]
    },
    {
      id: 'konversi',
      title: 'Jalur Konversi',
      type: 'collapse',
      url: '/calon-mahasiswa/konversi',
      icon: icons.IconSchool,
      children: [
        {
          id: 's1',
          title: 'S1',
          type: 'item',
          url: '/calon-mahasiswa/konversi/s1',
          target: false
        },
        {
          id: 's2',
          title: 'S2',
          type: 'item',
          url: '/calon-mahasiswa/konversi/s2',
          target: false
        }
      ]
    },
  ]
};

export default DataMahasiswa;
