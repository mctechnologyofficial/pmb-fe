// assets
import { IconFileDescription, IconUpload } from '@tabler/icons';

// constant
const icons = {
  IconFileDescription,
  IconUpload
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const BuktiPendaftaran = {
  id: 'buktiPendaftaran',
  title: 'Bukti Pendaftaran',
  type: 'group',
  children: [
    {
      id: 'buktiPendaftaran',
      title: 'Bukti Pendaftaran',
      type: 'item',
      url: '/dashboard/bukti-pendaftaran',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    },
    {
      id: 'uploadBerkas',
      title: 'Upload Berkas Pendaftaran',
      type: 'item',
      url: '/dashboard/upload-berkas',
      icon: icons.IconUpload,
      breadcrumbs: false
    },
  ]
};

export default BuktiPendaftaran;
