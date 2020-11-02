import * as React from 'react';
import { Button, Modal } from 'rsuite';
interface props extends React.HTMLAttributes<Element> {
    title?: string,
    status: boolean,
    handle: (status: boolean) => void,
    ok: () => void,
    footer?: JSX.Element
}

const Dialog = ({ title, status, handle, children, footer, ok }: props) => (
    <Modal show={status} onHide={() => handle(false)}>
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {footer || <React.Fragment>
                <Button appearance="primary" onClick={ok}>Ok</Button>
                <Button onClick={() => handle(false)} appearance="subtle">Cancel</Button>
            </React.Fragment>
            }
        </Modal.Footer>
    </Modal>
)

export default Dialog