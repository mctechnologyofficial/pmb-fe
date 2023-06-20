// assets
import { IconWriting, IconReport } from '@tabler/icons';

// constant
const icons = { IconWriting, IconReport };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'ujian',
  title: 'Ujian Seleksi',
  type: 'group',
  children: [
    {
      id: 'ujianCbt',
      title: 'Ujian CBT',
      type: 'item',
      url: '/dashboard-cbt',
      icon: icons.IconWriting,
      breadcrumbs: false
    },
    {
      id: 'hasilSeleksi',
      title: 'Hasil Seleksi',
      type: 'item',
      url: '/dashboard/hasil-seleksi',
      icon: icons.IconReport,
      breadcrumbs: false
    }
  ]
};

export default other;
