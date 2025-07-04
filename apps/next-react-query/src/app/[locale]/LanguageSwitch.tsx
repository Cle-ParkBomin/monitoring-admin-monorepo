'use client';

import DropButton from '@repo/ui/src/components/button/DropButton';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { LOCALES } from '@/i18n/routing';

export default function LanguageSwitch() {
  const t = useTranslations('root');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <DropButton
      title={t('language-switch')}
      value={currentLocale}
      valueList={LOCALES}
      onClick={handleLocaleChange}
      size='s'
    />
  );
}
