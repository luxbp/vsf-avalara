import { addressValidationModule } from './store/address-validation'
import { StorefrontModule } from '@vue-storefront/core/lib/modules'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'

export const KEY = 'avalara'

export const AvalaraModule: StorefrontModule = function ({ store, appConfig }) {
  StorageManager.init(KEY)
  store.registerModule(KEY + '-address-validation', addressValidationModule)
}
