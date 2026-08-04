import { layers, type LayerId } from '@/data/site'

/**
 * The stack traversal. Marks which layers of a feature's journey
 * were personally delivered.
 */
export function Traversal({ owned }: { owned: readonly LayerId[] }) {
  return (
    <div className="traversal">
      <ol className="traversal__list">
        {layers.map((layer) => {
          const isOwned = owned.includes(layer.id)
          return (
            <li key={layer.id} className="traversal__row" data-owned={isOwned}>
              <span className="traversal__node" aria-hidden="true" />
              <span className="traversal__label">
                {layer.label}
                <span className="skip">{isOwned ? ' — delivered' : ' — not on this project'}</span>
              </span>
              <span className="traversal__detail">{layer.detail}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/** Compact single-line version for the hero. */
export function TraversalInline() {
  return (
    <p className="traversal--inline">
      {layers.map((layer, i) => (
        <span key={layer.id}>
          <b>{layer.label}</b>
          {i < layers.length - 1 && <i>&nbsp;&nbsp;→&nbsp;</i>}
        </span>
      ))}
    </p>
  )
}
