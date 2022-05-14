
import { Flex } from "@chakra-ui/react";
import { usePdf } from "@mikecousins/react-pdf";
import React, { useRef, useState } from "react";
import { usePdfViewerContext } from "./utils/context";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

export default function PdfViewerView() {
    const { file } = usePdfViewerContext()
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
        file: file,
        page,
        canvasRef,
    });

    return (
        <Flex direction={'column'} justifyContent='center' alignItems={'center'} display={{ base: 'none', lg: 'inherit' }}>
            {!pdfDocument && <span>Loading...</span>}
            <canvas ref={canvasRef} width="100" height="100" />
            {Boolean(pdfDocument && pdfDocument.numPages) && (
                <Flex gap={'20px'} fontSize='50px' color={'white'}>
                    <Flex
                        cursor={page === 1 ? 'not-allowed' : 'pointer'}
                        onClick={() => setPage(page - 1)}
                        color={'white'}
                    >
                        <GrFormPrevious />
                    </Flex>

                    <Flex
                        cursor={page === pdfDocument.numPages ? 'not-allowed' : 'pointer'}
                        onClick={() => setPage(page + 1)}
                        color={'white'}
                    >
                        <GrFormNext />
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}    